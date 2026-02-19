<script setup lang="ts">
import { computed } from 'vue'
import type { QuestionBank, Locale } from '../../types/question'
import { localized } from '../../utils/localized'
import { useI18n } from '../../i18n'

const { t } = useI18n()

const props = defineProps<{
  bank: QuestionBank
  locale: Locale
}>()

const emit = defineEmits<{
  start: []
}>()

const questionStats = computed(() => {
  const qs = props.bank.questions
  return {
    total: qs.length,
    maturity: qs.filter((q) => q.question_type === 'maturity').length,
    context: qs.filter((q) => q.question_type === 'diagnostic' || q.question_type === 'context').length,
    powerful: qs.filter((q) => q.question_type === 'powerful_question').length,
  }
})

const hasContextQuestions = computed(() => questionStats.value.context > 0)
const hasPowerfulQuestions = computed(() => questionStats.value.powerful > 0)
</script>

<template>
  <div class="mx-auto max-w-2xl px-4 py-8">
    <!-- Title -->
    <h1 class="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
      {{ localized(bank.description, locale) }}
    </h1>
    <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
      {{ t('assessment.introQuestionCount').replace('{total}', String(questionStats.total)) }}
      &middot;
      {{ t('assessment.introDuration').replace('{min}', String(bank.estimated_duration_minutes)) }}
    </p>

    <!-- Anonymity notice -->
    <div class="mb-6 rounded-lg border-2 border-green-200 bg-green-50 p-5 dark:border-green-800 dark:bg-green-900/20">
      <div class="flex items-start gap-3">
        <svg class="mt-0.5 h-6 w-6 shrink-0 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
        <div>
          <h2 class="text-base font-semibold text-green-800 dark:text-green-300">
            {{ t('assessment.introAnonymityTitle') }}
          </h2>
          <p class="mt-1 text-sm text-green-700 dark:text-green-400">
            {{ t('assessment.introAnonymityText') }}
          </p>
          <p class="mt-2 text-sm font-semibold text-green-800 dark:text-green-300">
            {{ t('assessment.introHonestyNote') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Question types -->
    <div class="mb-6 space-y-3">
      <!-- Maturity -->
      <div class="flex items-start gap-3 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
        <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700 dark:bg-blue-900 dark:text-blue-300">
          1–5
        </span>
        <div>
          <p class="text-sm font-medium text-gray-900 dark:text-gray-100">{{ t('assessment.introMaturityLabel') }}</p>
          <p class="text-xs text-gray-500 dark:text-gray-400">{{ t('assessment.introMaturityDesc') }}</p>
        </div>
      </div>

      <!-- Context / Diagnostic -->
      <div v-if="hasContextQuestions" class="flex items-start gap-3 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
        <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-200 text-sm font-bold text-gray-600 dark:bg-gray-700 dark:text-gray-300">
          A
        </span>
        <div>
          <p class="text-sm font-medium text-gray-900 dark:text-gray-100">{{ t('assessment.introContextLabel') }}</p>
          <p class="text-xs text-gray-500 dark:text-gray-400">{{ t('assessment.introContextDesc') }}</p>
          <p class="mt-1 text-xs text-gray-400 dark:text-gray-500">{{ t('assessment.introMcNote') }}</p>
        </div>
      </div>

      <!-- Powerful questions -->
      <div v-if="hasPowerfulQuestions" class="flex items-start gap-3 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
        <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700 dark:bg-amber-900 dark:text-amber-300">
          ?
        </span>
        <div>
          <p class="text-sm font-medium text-gray-900 dark:text-gray-100">{{ t('assessment.introPowerfulLabel') }}</p>
          <p class="text-xs text-gray-500 dark:text-gray-400">{{ t('assessment.introPowerfulDesc') }}</p>
        </div>
      </div>
    </div>

    <!-- Start button -->
    <button
      class="w-full rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-700"
      @click="emit('start')"
    >
      {{ t('assessment.introStart') }}
    </button>
  </div>
</template>
