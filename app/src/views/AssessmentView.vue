<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from '../i18n'
import { useAssessmentStore } from '../stores/assessment'
import { useAssessmentFlow } from '../composables/useAssessmentFlow'
import type { Locale } from '../types/question'
import type { AnswerValue } from '../types/response'
import ProgressBar from '../components/assessment/ProgressBar.vue'
import SegmentationForm from '../components/assessment/SegmentationForm.vue'
import MaturityQuestion from '../components/assessment/MaturityQuestion.vue'
import ChoiceQuestion from '../components/assessment/ChoiceQuestion.vue'
import PowerfulQuestion from '../components/assessment/PowerfulQuestion.vue'
import { localized } from '../utils/localized'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const assessmentStore = useAssessmentStore()
const {
  store,
  locale,
  currentDimensionLabel,
  currentSubTopicLabel,
  segmentationFields,
  currentAnswer,
} = useAssessmentFlow()

const sessionId = route.params.id as string

onMounted(async () => {
  await store.initSession(sessionId, assessmentStore.questionBanks)

  if (store.error === 'alreadyCompleted') {
    router.replace({ name: 'thankYou', params: { id: sessionId } })
  }
})

onUnmounted(() => {
  store.$reset()
})

function handleSegmentationSubmit() {
  store.setSegmentation(store.segmentation)
}

function handleAnswer(value: AnswerValue) {
  if (store.currentQuestion) {
    store.setAnswer(store.currentQuestion.question_key, value)
  }
}

function handleNext() {
  if (store.isLastQuestion) {
    handleFinish()
  } else {
    store.goNext()
  }
}

async function handleFinish() {
  const success = await store.finalize()
  if (success) {
    router.push({ name: 'thankYou', params: { id: sessionId } })
  }
}
</script>

<template>
  <!-- Loading -->
  <div v-if="store.phase === 'loading'" class="flex items-center justify-center py-20">
    <p class="text-gray-500 dark:text-gray-400">{{ t('assessment.loading') }}</p>
  </div>

  <!-- Error -->
  <div v-else-if="store.phase === 'error'" class="mx-auto max-w-2xl px-4 py-12 text-center">
    <div class="rounded-lg border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
      <p class="text-red-700 dark:text-red-400">{{ t(`assessment.${store.error}`) }}</p>
      <router-link to="/" class="mt-4 inline-block text-sm text-blue-600 hover:underline dark:text-blue-400">
        {{ t('assessment.backHome') }}
      </router-link>
    </div>
  </div>

  <!-- Segmentation -->
  <div v-else-if="store.phase === 'segmentation'" class="mx-auto max-w-2xl px-4 py-8">
    <h1 class="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
      {{ store.questionBank ? localized(store.questionBank.description, locale as Locale) : '' }}
    </h1>
    <p class="mb-6 text-gray-600 dark:text-gray-400">{{ t('assessment.segmentationIntro') }}</p>
    <SegmentationForm
      :fields="segmentationFields"
      :modelValue="store.segmentation"
      @update:modelValue="(v) => (store.segmentation = v)"
      @submit="handleSegmentationSubmit"
    />
  </div>

  <!-- Questions -->
  <div v-else-if="store.phase === 'questions' && store.currentQuestion" class="mx-auto max-w-2xl px-4 py-8">
    <!-- Dimension / Sub-topic header -->
    <div v-if="currentDimensionLabel" class="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
      {{ currentDimensionLabel }}
      <span v-if="currentSubTopicLabel" class="text-gray-400 dark:text-gray-500"> / {{ currentSubTopicLabel }}</span>
    </div>

    <ProgressBar :current="store.currentIndex + 1" :total="store.totalQuestions" />

    <!-- Question component -->
    <div class="mt-6">
      <MaturityQuestion
        v-if="store.currentQuestion.question_type === 'maturity'"
        :question="store.currentQuestion"
        :modelValue="(currentAnswer as number | null)"
        :locale="(locale as Locale)"
        @update:modelValue="handleAnswer"
      />
      <ChoiceQuestion
        v-else-if="store.currentQuestion.question_type === 'diagnostic' || store.currentQuestion.question_type === 'context' || store.currentQuestion.answer_options"
        :question="store.currentQuestion"
        :modelValue="(currentAnswer as string | string[] | null)"
        :locale="(locale as Locale)"
        @update:modelValue="handleAnswer"
      />
      <PowerfulQuestion
        v-else-if="store.currentQuestion.question_type === 'powerful_question'"
        :question="store.currentQuestion"
        :modelValue="(currentAnswer as string) ?? ''"
        :locale="(locale as Locale)"
        @update:modelValue="handleAnswer"
      />
    </div>

    <!-- Navigation -->
    <div class="mt-8 flex justify-between">
      <button
        :disabled="store.isFirstQuestion && !store.hasSegmentation"
        class="rounded-md border border-gray-300 px-6 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100 disabled:opacity-30 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
        @click="store.goPrev()"
      >
        {{ t('assessment.previous') }}
      </button>
      <button
        :disabled="!store.canProceed"
        class="rounded-md bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 disabled:opacity-50"
        @click="handleNext"
      >
        {{ store.isLastQuestion ? t('assessment.finish') : t('assessment.next') }}
      </button>
    </div>
  </div>

  <!-- Submitting -->
  <div v-else-if="store.phase === 'submitting'" class="flex items-center justify-center py-20">
    <p class="text-gray-500 dark:text-gray-400">{{ t('assessment.submitting') }}</p>
  </div>
</template>
