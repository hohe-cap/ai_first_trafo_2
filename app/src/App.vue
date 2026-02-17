<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import { loadAllQuestionBanks } from './loader/yaml-loader'
import { useAssessmentStore } from './stores/assessment'
import { useI18n } from './i18n'

const store = useAssessmentStore()
const { t } = useI18n()
const loading = ref(true)
const loadErrors = ref<string[]>([])

onMounted(async () => {
  const { banks, errors } = await loadAllQuestionBanks()
  store.setQuestionBanks(banks)
  loadErrors.value = errors
  loading.value = false
})
</script>

<template>
  <div class="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900">
    <AppHeader />
    <main class="flex-1">
      <div v-if="loading" class="flex items-center justify-center py-20">
        <p class="text-gray-500 dark:text-gray-400">{{ t('loading.questionBanks') }}</p>
      </div>
      <div v-else-if="loadErrors.length > 0" class="mx-auto max-w-3xl px-4 py-12">
        <div class="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
          <h2 class="mb-2 font-bold text-red-800 dark:text-red-300">{{ t('loading.error') }}</h2>
          <ul class="list-inside list-disc text-sm text-red-700 dark:text-red-400">
            <li v-for="error in loadErrors" :key="error">{{ error }}</li>
          </ul>
        </div>
      </div>
      <router-view v-else />
    </main>
    <AppFooter />
  </div>
</template>
