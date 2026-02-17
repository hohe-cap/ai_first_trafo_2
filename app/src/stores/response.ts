import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { QuestionBank, Question } from '../types/question'
import type { AnswerValue, FlowPhase, ResponsePayload } from '../types/response'
import { getSession, saveResponse as apiSaveResponse, getResponse as apiGetResponse } from '../api/client'
import type { Session } from '../api/client'
import { saveToStorage, loadFromStorage } from '../utils/storage'
import { generateId } from '../utils/id'

export const useResponseStore = defineStore('response', () => {
  // --- State ---
  const session = ref<Session | null>(null)
  const questionBank = ref<QuestionBank | null>(null)
  const respondentId = ref('')
  const segmentation = ref<Record<string, string>>({})
  const answers = ref<Record<string, AnswerValue>>({})
  const currentIndex = ref(0)
  const phase = ref<FlowPhase>('loading')
  const startedAt = ref('')
  const error = ref('')

  let syncTimer: ReturnType<typeof setTimeout> | null = null

  // --- Computed ---
  const sortedQuestions = computed<Question[]>(() => {
    if (!questionBank.value) return []
    let questions = [...questionBank.value.questions]
    // Filter by selected dimensions if session has dimension restriction
    const dims = (session.value as Session & { dimensions?: string[] })?.dimensions
    if (dims && dims.length > 0) {
      questions = questions.filter((q) => !q.dimension || dims.includes(q.dimension))
    }
    return questions.sort((a, b) => a.order - b.order)
  })

  const totalQuestions = computed(() => sortedQuestions.value.length)

  const currentQuestion = computed<Question | null>(() =>
    sortedQuestions.value[currentIndex.value] ?? null,
  )

  const isFirstQuestion = computed(() => currentIndex.value === 0)
  const isLastQuestion = computed(() => currentIndex.value === totalQuestions.value - 1)

  const hasSegmentation = computed(() => {
    const seg = questionBank.value?.segmentation
    return !!(seg?.required && seg.required.length > 0)
  })

  const canProceed = computed(() => {
    const q = currentQuestion.value
    if (!q) return false

    // Optional questions can always be skipped
    if (q.optional) return true

    const answer = answers.value[q.question_key]
    if (answer === undefined || answer === null) return false

    if (q.question_type === 'maturity') {
      return typeof answer === 'number' && answer >= 1 && answer <= 5
    }
    if (q.question_type === 'powerful_question') return true
    if (typeof answer === 'string') return answer.length > 0
    if (Array.isArray(answer)) return answer.length > 0
    return false
  })

  // --- Actions ---

  async function initSession(sessionId: string, questionBanks: Map<string, QuestionBank>) {
    phase.value = 'loading'
    error.value = ''

    try {
      // Load session
      const sess = await getSession(sessionId)
      session.value = sess

      if (sess.status === 'closed' || sess.status === 'archived') {
        error.value = 'sessionClosed'
        phase.value = 'error'
        return
      }

      // Resolve question bank
      const bank = questionBanks.get(sess.type)
      if (!bank) {
        error.value = 'questionBankNotFound'
        phase.value = 'error'
        return
      }
      questionBank.value = bank

      // Get or create respondent ID
      const storageKey = `respondent:${sessionId}`
      let rid = loadFromStorage<string>(storageKey)
      if (!rid) {
        rid = generateId()
        saveToStorage(storageKey, rid)
      }
      respondentId.value = rid

      // Try to resume from server
      try {
        const existing = await apiGetResponse(sessionId, rid)
        // Note: closed sessions already returned early above,
        // so here the session is always open → allow re-entry even if completed
        // Restore state (works for both in-progress and completed-but-reopenable)
        segmentation.value = existing.segmentation ?? {}
        answers.value = existing.answers ?? {}
        startedAt.value = existing.started_at

        if (existing.completed_at) {
          // Re-entry: completed but session still open → start from beginning
          currentIndex.value = 0
        } else {
          // Resume: find next unanswered question
          const lastAnswered = findLastAnsweredIndex()
          currentIndex.value = Math.min(lastAnswered + 1, totalQuestions.value - 1)
        }
        phase.value = 'questions'
      } catch {
        // No existing response — check localStorage draft
        const draft = loadFromStorage<{ segmentation: Record<string, string>; answers: Record<string, AnswerValue> }>(`draft:${sessionId}`)
        if (draft) {
          segmentation.value = draft.segmentation ?? {}
          answers.value = draft.answers ?? {}
        }

        startedAt.value = new Date().toISOString()

        // Auto-fill team_cluster with session code
        if (sess.code) {
          segmentation.value = { ...segmentation.value, team_cluster: sess.code }
        }

        phase.value = hasSegmentation.value ? 'segmentation' : 'questions'
      }
    } catch (e) {
      error.value = (e as Error).message
      phase.value = 'error'
    }
  }

  function findLastAnsweredIndex(): number {
    const questions = sortedQuestions.value
    for (let i = questions.length - 1; i >= 0; i--) {
      const q = questions[i]
      if (q && answers.value[q.question_key] !== undefined) return i
    }
    return -1
  }

  function setSegmentation(data: Record<string, string>) {
    segmentation.value = data
    phase.value = 'questions'
    currentIndex.value = 0
    scheduleSave()
  }

  function setAnswer(questionKey: string, value: AnswerValue) {
    answers.value[questionKey] = value
    saveDraft()
    scheduleSave()
  }

  function goNext() {
    if (isLastQuestion.value) return
    currentIndex.value++
    flushSave()
  }

  function goPrev() {
    if (currentIndex.value > 0) {
      currentIndex.value--
    } else if (hasSegmentation.value) {
      phase.value = 'segmentation'
    }
    flushSave()
  }

  async function finalize(): Promise<boolean> {
    phase.value = 'submitting'
    try {
      await syncToServer(new Date().toISOString())
      return true
    } catch {
      phase.value = 'questions'
      return false
    }
  }

  // --- Server sync ---

  function scheduleSave() {
    if (syncTimer) clearTimeout(syncTimer)
    syncTimer = setTimeout(() => syncToServer(), 500)
  }

  function flushSave() {
    if (syncTimer) {
      clearTimeout(syncTimer)
      syncTimer = null
    }
    syncToServer()
  }

  async function syncToServer(completedAt?: string) {
    if (!session.value) return

    const payload: ResponsePayload = {
      id: respondentId.value,
      session_id: session.value.id,
      segmentation: segmentation.value,
      answers: answers.value,
      started_at: startedAt.value,
      updated_at: new Date().toISOString(),
    }
    if (completedAt) {
      payload.completed_at = completedAt
    }

    try {
      await apiSaveResponse(session.value.id, payload)
    } catch (e) {
      console.error('Failed to sync response:', e)
    }
  }

  function saveDraft() {
    if (!session.value) return
    saveToStorage(`draft:${session.value.id}`, {
      segmentation: segmentation.value,
      answers: answers.value,
    })
  }

  function $reset() {
    session.value = null
    questionBank.value = null
    respondentId.value = ''
    segmentation.value = {}
    answers.value = {}
    currentIndex.value = 0
    phase.value = 'loading'
    startedAt.value = ''
    error.value = ''
    if (syncTimer) clearTimeout(syncTimer)
    syncTimer = null
  }

  return {
    // State
    session,
    questionBank,
    respondentId,
    segmentation,
    answers,
    currentIndex,
    phase,
    startedAt,
    error,
    // Computed
    sortedQuestions,
    totalQuestions,
    currentQuestion,
    isFirstQuestion,
    isLastQuestion,
    hasSegmentation,
    canProceed,
    // Actions
    initSession,
    setSegmentation,
    setAnswer,
    goNext,
    goPrev,
    finalize,
    $reset,
  }
})
