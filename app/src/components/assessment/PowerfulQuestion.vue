<script setup lang="ts">
import { computed } from 'vue'
import type { Question, Locale } from '../../types/question'
import { localized } from '../../utils/localized'
import { useI18n } from '../../i18n'

const { t } = useI18n()

const props = defineProps<{
  question: Question
  modelValue: string
  locale: Locale
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const maxLen = computed(() => props.question.max_length ?? 280)
const charCount = computed(() => props.modelValue?.length ?? 0)
</script>

<template>
  <div>
    <h2 class="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
      {{ localized(question.question_text, locale) }}
    </h2>
    <div class="mb-4 flex items-center gap-2">
      <span v-if="question.optional" class="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
        {{ t('assessment.optional') }}
      </span>
      <span class="text-xs text-gray-500 dark:text-gray-400">
        {{ t('assessment.maxLength', { max: maxLen }) }}
      </span>
    </div>

    <textarea
      :value="modelValue"
      :maxlength="maxLen"
      rows="4"
      class="w-full rounded-lg border border-gray-300 p-3 text-sm transition focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400"
      @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    />
    <div class="mt-1 text-right text-xs text-gray-500 dark:text-gray-400">
      {{ charCount }} / {{ maxLen }}
    </div>
  </div>
</template>
