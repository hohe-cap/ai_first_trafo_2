import { computed } from 'vue'
import { useResponseStore } from '../stores/response'
import { useI18n } from '../i18n'
import { localized } from '../utils/localized'
import type { Locale, SegmentField } from '../types/question'

export function useAssessmentFlow() {
  const store = useResponseStore()
  const { locale } = useI18n()

  const progressPercent = computed(() =>
    store.totalQuestions > 0
      ? Math.round(((store.currentIndex + 1) / store.totalQuestions) * 100)
      : 0,
  )

  const currentDimensionLabel = computed(() => {
    const q = store.currentQuestion
    // Context & Readiness: use section label instead of dimension
    if (q?.section) {
      const sec = store.questionBank?.sections?.find((s) => s.key === q.section)
      if (sec) return localized(sec.name, locale.value as Locale)
      return q.section
    }
    if (!q?.dimension) return null
    const dim = store.questionBank?.dimensions?.find((d) => d.key === q.dimension)
    if (!dim) return q.dimension
    return localized(dim.name, locale.value as Locale)
  })

  const currentSubTopicLabel = computed(() => {
    const q = store.currentQuestion
    // Context & Readiness: use category label instead of sub_topic
    if (q?.category) {
      const cat = store.questionBank?.categories?.find((c) => c.key === q.category)
      if (cat) return localized(cat.name, locale.value as Locale)
      return q.category
    }
    if (!q?.sub_topic) return null
    // Search top-level sub_topics (legacy)
    const st = store.questionBank?.sub_topics?.find((s) => s.key === q.sub_topic)
    if (st) return localized(st.name, locale.value as Locale)
    // Fallback: search inside dimensions[].sub_topics (combined deep-dive)
    for (const dim of store.questionBank?.dimensions ?? []) {
      const nested = dim.sub_topics?.find((s) => s.key === q.sub_topic)
      if (nested) return localized(nested.name, locale.value as Locale)
    }
    return null
  })

  const segmentationFields = computed<SegmentField[]>(() => {
    const seg = store.questionBank?.segmentation
    if (!seg) return []
    return [...(seg.required ?? []), ...(seg.optional ?? [])]
  })

  const currentAnswer = computed(() => {
    if (!store.currentQuestion) return null
    return store.answers[store.currentQuestion.question_key] ?? null
  })

  return {
    store,
    locale,
    progressPercent,
    currentDimensionLabel,
    currentSubTopicLabel,
    segmentationFields,
    currentAnswer,
  }
}
