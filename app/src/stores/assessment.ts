import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Assessment } from '../types/assessment'
import type { QuestionBank } from '../types/question'
import { saveToStorage, loadFromStorage, removeFromStorage, listStorageKeys } from '../utils/storage'

const ASSESSMENTS_PREFIX = 'assessment:'

export const useAssessmentStore = defineStore('assessment', () => {
  const questionBanks = ref<Map<string, QuestionBank>>(new Map())
  const currentAssessment = ref<Assessment | null>(null)

  const assessmentList = computed(() => {
    return listStorageKeys(ASSESSMENTS_PREFIX).map((key) => {
      const assessment = loadFromStorage<Assessment>(key)
      return assessment?.meta ?? null
    }).filter(Boolean)
  })

  function setQuestionBanks(banks: Map<string, QuestionBank>) {
    questionBanks.value = banks
  }

  function loadAssessment(id: string): Assessment | null {
    const assessment = loadFromStorage<Assessment>(`${ASSESSMENTS_PREFIX}${id}`)
    if (assessment) {
      currentAssessment.value = assessment
    }
    return assessment
  }

  function saveAssessment(assessment: Assessment) {
    assessment.meta.updated_at = new Date().toISOString()
    saveToStorage(`${ASSESSMENTS_PREFIX}${assessment.meta.id}`, assessment)
    currentAssessment.value = assessment
  }

  function deleteAssessment(id: string) {
    removeFromStorage(`${ASSESSMENTS_PREFIX}${id}`)
    if (currentAssessment.value?.meta.id === id) {
      currentAssessment.value = null
    }
  }

  function saveAnswer(questionKey: string, value: number | string | string[]) {
    if (!currentAssessment.value) return
    currentAssessment.value.answers[questionKey] = {
      question_key: questionKey,
      value,
      answered_at: new Date().toISOString(),
    }
    saveAssessment(currentAssessment.value)
  }

  return {
    questionBanks,
    currentAssessment,
    assessmentList,
    setQuestionBanks,
    loadAssessment,
    saveAssessment,
    deleteAssessment,
    saveAnswer,
  }
})
