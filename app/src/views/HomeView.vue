<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from '../i18n'
import { getSessionByCode } from '../api/client'

const { t } = useI18n()
const router = useRouter()

const code = ref('')
const codeError = ref('')
const joining = ref(false)

async function joinSession() {
  const trimmed = code.value.trim().toUpperCase()
  if (!trimmed) return

  joining.value = true
  codeError.value = ''

  try {
    const session = await getSessionByCode(trimmed)
    if (session.status === 'closed' || session.status === 'archived') {
      codeError.value = t('home.sessionClosed')
      return
    }
    router.push({ name: 'assessment', params: { id: session.id } })
  } catch {
    codeError.value = t('home.invalidCode')
  } finally {
    joining.value = false
  }
}
</script>

<template>
  <div class="mx-auto max-w-3xl px-4 py-12">
    <h1 class="mb-2 text-3xl font-bold text-gray-900 dark:text-gray-100">{{ t('home.welcome') }}</h1>
    <p class="mb-10 text-gray-600 dark:text-gray-400">{{ t('home.description') }}</p>

    <div class="grid gap-6 sm:grid-cols-2">
      <!-- Facilitator path -->
      <router-link
        to="/facilitator"
        class="group flex flex-col items-center rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm transition hover:border-blue-300 hover:shadow-md no-underline dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500"
      >
        <div class="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl text-blue-600 transition group-hover:bg-blue-200 dark:bg-blue-900/40 dark:text-blue-400 dark:group-hover:bg-blue-900/60">
          &#9881;
        </div>
        <div class="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-100">{{ t('home.iAmFacilitator') }}</div>
        <p class="text-sm text-gray-500 dark:text-gray-400">{{ t('home.iAmFacilitatorDesc') }}</p>
      </router-link>

      <!-- Participant path -->
      <div class="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div class="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl text-green-600 dark:bg-green-900/40 dark:text-green-400">
          &#9998;
        </div>
        <div class="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-100">{{ t('home.iAmParticipant') }}</div>
        <p class="mb-4 text-sm text-gray-500 dark:text-gray-400">{{ t('home.iAmParticipantDesc') }}</p>

        <form class="flex w-full flex-col gap-3" @submit.prevent="joinSession">
          <input
            v-model="code"
            type="text"
            :placeholder="t('home.codePlaceholder')"
            maxlength="6"
            class="w-full rounded-md border border-gray-300 px-3 py-2.5 text-center text-lg font-mono uppercase tracking-widest focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400"
          />
          <button
            type="submit"
            :disabled="joining || !code.trim()"
            class="w-full rounded-md bg-green-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-green-700 disabled:opacity-50"
          >
            {{ t('home.join') }}
          </button>
        </form>

        <p v-if="codeError" class="mt-2 text-sm text-red-600 dark:text-red-400">{{ codeError }}</p>
      </div>
    </div>
  </div>
</template>
