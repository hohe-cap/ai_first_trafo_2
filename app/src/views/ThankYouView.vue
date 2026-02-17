<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from '../i18n'
import { getSession } from '../api/client'

const { t } = useI18n()
const route = useRoute()
const sessionId = route.params.id as string
const sessionOpen = ref(false)

onMounted(async () => {
  try {
    const session = await getSession(sessionId)
    sessionOpen.value = session.status === 'open'
  } catch {
    // Session not found — keep default (no edit link)
  }
})
</script>

<template>
  <div class="mx-auto max-w-2xl px-4 py-16 text-center">
    <div class="mb-4 text-5xl text-green-600 dark:text-green-400">&#10003;</div>
    <h1 class="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">{{ t('assessment.thankYou') }}</h1>
    <p class="text-gray-600 dark:text-gray-400">{{ t('assessment.thankYouDesc') }}</p>
    <div class="mt-8 flex flex-col items-center gap-3">
      <router-link
        v-if="sessionOpen"
        :to="{ name: 'assessment', params: { id: sessionId } }"
        class="inline-block rounded-md border border-blue-600 px-6 py-2.5 text-sm font-medium text-blue-600 no-underline transition hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20"
      >
        {{ t('assessment.editAnswers') }}
      </router-link>
      <router-link
        to="/"
        class="inline-block rounded-md bg-blue-600 px-6 py-2.5 text-sm font-medium text-white no-underline transition hover:bg-blue-700"
      >
        {{ t('assessment.backHome') }}
      </router-link>
    </div>
  </div>
</template>
