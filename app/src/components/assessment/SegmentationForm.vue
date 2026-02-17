<script setup lang="ts">
import { computed } from 'vue'
import type { SegmentField, Locale } from '../../types/question'
import { localized } from '../../utils/localized'
import { useI18n } from '../../i18n'

const { t, locale } = useI18n()

const props = defineProps<{
  fields: SegmentField[]
  modelValue: Record<string, string>
}>()

const emit = defineEmits<{
  'update:modelValue': [value: Record<string, string>]
  'submit': []
}>()

function updateField(key: string, value: string) {
  emit('update:modelValue', { ...props.modelValue, [key]: value })
}

const allRequiredFilled = computed(() =>
  props.fields
    .filter((f) => !f.show_if) // required fields have no show_if
    .every((f) => (props.modelValue[f.key] ?? '').trim().length > 0),
)
</script>

<template>
  <form @submit.prevent="emit('submit')">
    <div class="space-y-6">
      <div v-for="field in fields" :key="field.key">
        <label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
          {{ localized(field.name, locale as Locale) }}
          <span v-if="field.show_if" class="text-xs font-normal text-gray-400 dark:text-gray-500">({{ t('assessment.optional') }})</span>
        </label>
        <p v-if="field.description" class="mb-2 text-xs text-gray-500 dark:text-gray-400">
          {{ localized(field.description, locale as Locale) }}
        </p>

        <!-- Readonly display for predefined_list (e.g. team_cluster = session code) -->
        <div
          v-if="field.type === 'predefined_list'"
          class="inline-block rounded-md border border-gray-200 bg-gray-50 px-4 py-2.5 font-mono text-sm font-semibold tracking-wider text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
        >
          {{ modelValue[field.key] ?? '—' }}
        </div>

        <!-- Radio buttons for single_choice -->
        <div v-else-if="field.type === 'single_choice'" class="space-y-2">
          <button
            v-for="opt in field.options"
            :key="opt.key"
            type="button"
            class="flex w-full items-center gap-3 rounded-lg border-2 px-4 py-2.5 text-left text-sm transition"
            :class="[
              modelValue[field.key] === opt.key
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                : 'border-gray-200 bg-white hover:border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:hover:border-gray-500',
            ]"
            @click="updateField(field.key, opt.key)"
          >
            <span
              class="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2"
              :class="[
                modelValue[field.key] === opt.key
                  ? 'border-blue-500 bg-blue-500'
                  : 'border-gray-300 bg-white dark:border-gray-500 dark:bg-gray-700',
              ]"
            >
              <span v-if="modelValue[field.key] === opt.key" class="h-1.5 w-1.5 rounded-full bg-white" />
            </span>
            <span class="text-gray-800 dark:text-gray-200">{{ opt[locale as 'de' | 'en'] }}</span>
          </button>
        </div>
      </div>
    </div>

    <button
      type="submit"
      :disabled="!allRequiredFilled"
      class="mt-8 w-full rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700 disabled:opacity-50"
    >
      {{ t('assessment.next') }}
    </button>
  </form>
</template>
