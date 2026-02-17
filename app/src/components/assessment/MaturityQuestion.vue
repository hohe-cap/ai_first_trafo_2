<script setup lang="ts">
import type { Question, Locale } from '../../types/question'
import { localized } from '../../utils/localized'

defineProps<{
  question: Question
  modelValue: number | null
  locale: Locale
}>()

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()

const levels = [1, 2, 3, 4, 5] as const
</script>

<template>
  <div>
    <h2 class="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
      {{ localized(question.question_text, locale) }}
    </h2>

    <div class="space-y-3">
      <button
        v-for="level in levels"
        :key="level"
        type="button"
        class="flex w-full items-start gap-3 rounded-lg border-2 p-4 text-left transition"
        :class="[
          modelValue === level
            ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200 dark:bg-blue-900/30 dark:ring-blue-800'
            : 'border-gray-200 bg-white hover:border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:hover:border-gray-500',
        ]"
        @click="emit('update:modelValue', level)"
      >
        <span
          class="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold"
          :class="[
            modelValue === level
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300',
          ]"
        >
          {{ level }}
        </span>
        <span class="text-sm text-gray-800 dark:text-gray-200">
          {{ question.maturity_levels?.[level]?.[locale] }}
        </span>
      </button>
    </div>
  </div>
</template>
