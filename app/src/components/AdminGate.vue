<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAdminStore } from '../stores/admin'
import { useI18n } from '../i18n'

const { t } = useI18n()
const admin = useAdminStore()

const inputKey = ref('')
const error = ref(false)
const loading = ref(true)
const needsAuth = ref(false)

onMounted(async () => {
  const isProtected = await admin.checkProtected()
  if (!isProtected) {
    // No admin secret configured — pass through
    admin.verified = true
    loading.value = false
    return
  }

  needsAuth.value = true

  // Try stored key
  if (admin.key) {
    const ok = await admin.verify()
    if (ok) {
      loading.value = false
      return
    }
  }
  loading.value = false
})

async function handleSubmit() {
  error.value = false
  admin.setKey(inputKey.value)
  const ok = await admin.verify()
  if (!ok) {
    error.value = true
    admin.clearKey()
  }
}
</script>

<template>
  <div v-if="loading" class="flex min-h-[50vh] items-center justify-center">
    <div class="text-gray-500 dark:text-gray-400">...</div>
  </div>

  <slot v-else-if="admin.verified" />

  <div v-else class="flex min-h-[60vh] items-center justify-center px-4">
    <div class="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-8 shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div class="mb-6 text-center">
        <div class="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
          <svg class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100">{{ t('admin.title') }}</h2>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">{{ t('admin.description') }}</p>
      </div>

      <form @submit.prevent="handleSubmit">
        <input
          v-model="inputKey"
          type="password"
          :placeholder="t('admin.placeholder')"
          autocomplete="off"
          class="mb-3 w-full rounded-md border border-gray-300 px-4 py-2.5 text-center focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400"
        />
        <p v-if="error" class="mb-3 text-center text-sm text-red-600 dark:text-red-400">
          {{ t('admin.error') }}
        </p>
        <button
          type="submit"
          :disabled="!inputKey || admin.checking"
          class="w-full rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 disabled:opacity-50"
        >
          {{ admin.checking ? '...' : t('admin.submit') }}
        </button>
      </form>

      <router-link
        to="/"
        class="mt-4 block text-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
      >
        {{ t('admin.backHome') }}
      </router-link>
    </div>
  </div>
</template>
