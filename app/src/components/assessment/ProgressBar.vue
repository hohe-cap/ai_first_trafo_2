<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '../../i18n'

const { t } = useI18n()

const props = defineProps<{
  current: number
  total: number
}>()

const percent = computed(() => Math.round((props.current / props.total) * 100))
</script>

<template>
  <div class="mb-6">
    <div class="mb-1 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
      <span>{{ t('assessment.questionOf', { current, total }) }}</span>
      <span>{{ percent }}%</span>
    </div>
    <div class="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
      <div
        class="h-2 rounded-full bg-blue-600 transition-all duration-300"
        :style="{ width: `${percent}%` }"
      />
    </div>
  </div>
</template>
