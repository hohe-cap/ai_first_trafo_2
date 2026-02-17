<script setup lang="ts">
import { computed } from 'vue'
import type { Question, Locale } from '../../types/question'
import { localized } from '../../utils/localized'
import { useI18n } from '../../i18n'

const { t } = useI18n()

const props = defineProps<{
  question: Question
  modelValue: string | string[] | null
  locale: Locale
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string | string[]]
}>()

const isMultiple = computed(
  () => props.question.allow_multiple === true || props.question.answer_type === 'multiple_choice',
)

const maxSelections = computed(() => props.question.max_selections ?? 0)

const isMaxReached = computed(() => {
  if (!isMultiple.value || maxSelections.value <= 0) return false
  return Array.isArray(props.modelValue) && props.modelValue.length >= maxSelections.value
})

const sortedOptions = computed(() =>
  [...(props.question.answer_options ?? [])].sort((a, b) => a.order - b.order),
)

function isSelected(key: string): boolean {
  if (isMultiple.value) {
    return Array.isArray(props.modelValue) && props.modelValue.includes(key)
  }
  return props.modelValue === key
}

function isDisabled(key: string): boolean {
  return isMaxReached.value && !isSelected(key)
}

function selectSingle(key: string) {
  emit('update:modelValue', key)
}

function toggleMultiple(key: string) {
  const current = Array.isArray(props.modelValue) ? [...props.modelValue] : []
  const idx = current.indexOf(key)
  if (idx >= 0) {
    current.splice(idx, 1)
  } else {
    if (maxSelections.value > 0 && current.length >= maxSelections.value) return
    current.push(key)
  }
  emit('update:modelValue', current)
}
</script>

<template>
  <div>
    <h2 class="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
      {{ localized(question.question_text, locale) }}
    </h2>
    <p v-if="question.description" class="mb-4 text-sm text-gray-500 dark:text-gray-400">
      {{ localized(question.description, locale) }}
    </p>
    <p v-if="question.why_important" class="mb-4 text-sm italic text-gray-500 dark:text-gray-400">
      {{ localized(question.why_important, locale) }}
    </p>

    <p v-if="isMultiple" class="mb-3 text-xs text-gray-400 dark:text-gray-500">
      {{ maxSelections > 0 ? t('assessment.multipleChoiceMax').replace('{max}', String(maxSelections)) : t('assessment.multipleChoice') }}
    </p>

    <div class="space-y-3">
      <button
        v-for="(opt, idx) in sortedOptions"
        :key="opt.key"
        type="button"
        class="flex w-full items-start gap-3 rounded-lg border-2 p-4 text-left transition"
        :class="[
          isSelected(opt.key)
            ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200 dark:bg-blue-900/30 dark:ring-blue-800'
            : isDisabled(opt.key)
              ? 'cursor-not-allowed border-gray-200 bg-gray-50 opacity-50 dark:border-gray-700 dark:bg-gray-800/50'
              : 'border-gray-200 bg-white hover:border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:hover:border-gray-500',
        ]"
        :disabled="isDisabled(opt.key)"
        @click="isMultiple ? toggleMultiple(opt.key) : selectSingle(opt.key)"
      >
        <span
          class="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold"
          :class="[
            isSelected(opt.key)
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300',
          ]"
        >
          {{ idx + 1 }}
        </span>
        <span class="text-sm text-gray-800 dark:text-gray-200">{{ opt[locale] }}</span>
      </button>
    </div>
  </div>
</template>
