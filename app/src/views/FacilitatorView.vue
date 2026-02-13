<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useI18n } from '../i18n'
import { useAssessmentStore } from '../stores/assessment'
import {
  createSession,
  getSessions,
  updateSessionStatus,
  type Session,
} from '../api/client'

const { t } = useI18n()
const assessmentStore = useAssessmentStore()

const sessions = ref<Session[]>([])
const loading = ref(false)

// Form state
const newType = ref('pulse_check')
const newTeam = ref('')
const creating = ref(false)

const availableTypes = computed(() => {
  const types: { value: string; label: string }[] = []
  for (const [, bank] of assessmentStore.questionBanks) {
    const exploType = bank.exploration_type
    if (exploType === 'pulse_check') {
      types.push({ value: 'pulse_check', label: t('assessment.pulseCheck') })
    } else if (exploType?.startsWith('deep_dive')) {
      const dim = bank.dimension?.toUpperCase() || exploType
      types.push({
        value: exploType,
        label: `${t('assessment.deepDive')} — ${dim}`,
      })
    }
  }
  if (types.length === 0) {
    types.push({ value: 'pulse_check', label: t('assessment.pulseCheck') })
  }
  return types
})

async function loadSessions() {
  loading.value = true
  try {
    sessions.value = await getSessions()
    // Sort newest first
    sessions.value.sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    )
  } catch (err) {
    console.error('Failed to load sessions:', err)
  } finally {
    loading.value = false
  }
}

async function handleCreate() {
  if (!newTeam.value.trim()) return
  creating.value = true
  try {
    await createSession(newType.value, newTeam.value.trim())
    newTeam.value = ''
    await loadSessions()
  } catch (err) {
    console.error('Failed to create session:', err)
  } finally {
    creating.value = false
  }
}

async function toggleStatus(session: Session) {
  const newStatus = session.status === 'open' ? 'closed' : 'open'
  try {
    await updateSessionStatus(session.id, newStatus)
    await loadSessions()
  } catch (err) {
    console.error('Failed to update session:', err)
  }
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString(undefined, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

onMounted(loadSessions)
</script>

<template>
  <div class="mx-auto max-w-4xl px-4 py-8">
    <h1 class="mb-6 text-2xl font-bold text-gray-900">{{ t('facilitator.title') }}</h1>

    <!-- Create session form -->
    <div class="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h2 class="mb-4 text-lg font-semibold text-gray-800">{{ t('facilitator.createSession') }}</h2>
      <form class="flex flex-wrap items-end gap-4" @submit.prevent="handleCreate">
        <div class="min-w-[180px] flex-1">
          <label class="mb-1 block text-sm font-medium text-gray-700">
            {{ t('facilitator.sessionType') }}
          </label>
          <select
            v-model="newType"
            class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option v-for="at in availableTypes" :key="at.value" :value="at.value">
              {{ at.label }}
            </option>
          </select>
        </div>
        <div class="min-w-[180px] flex-1">
          <label class="mb-1 block text-sm font-medium text-gray-700">
            {{ t('facilitator.teamName') }}
          </label>
          <input
            v-model="newTeam"
            type="text"
            :placeholder="t('facilitator.teamPlaceholder')"
            class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          :disabled="creating || !newTeam.trim()"
          class="rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-blue-700 disabled:opacity-50"
        >
          {{ t('facilitator.create') }}
        </button>
      </form>
    </div>

    <!-- Session list -->
    <h2 class="mb-3 text-lg font-semibold text-gray-800">{{ t('facilitator.sessions') }}</h2>

    <div v-if="loading" class="py-8 text-center text-gray-500">...</div>

    <div v-else-if="sessions.length === 0" class="rounded-lg border border-gray-200 bg-white p-8 text-center text-gray-500">
      {{ t('facilitator.noSessions') }}
    </div>

    <div v-else class="space-y-3">
      <div
        v-for="session in sessions"
        :key="session.id"
        class="flex flex-wrap items-center gap-4 rounded-lg border border-gray-200 bg-white px-5 py-4 shadow-sm"
      >
        <!-- Team + Type -->
        <div class="min-w-[140px] flex-1">
          <div class="font-semibold text-gray-900">{{ session.team }}</div>
          <div class="text-xs text-gray-500">{{ session.type }}</div>
        </div>

        <!-- Code -->
        <div class="text-center">
          <div class="text-xs text-gray-500">{{ t('facilitator.code') }}</div>
          <div class="font-mono text-lg font-bold tracking-widest text-blue-700">{{ session.code }}</div>
        </div>

        <!-- Status -->
        <div class="text-center">
          <div class="text-xs text-gray-500">{{ t('facilitator.status') }}</div>
          <span
            :class="[
              'inline-block rounded-full px-2 py-0.5 text-xs font-medium',
              session.status === 'open'
                ? 'bg-green-100 text-green-800'
                : 'bg-gray-100 text-gray-600',
            ]"
          >
            {{ session.status === 'open' ? t('facilitator.open') : t('facilitator.closed') }}
          </span>
        </div>

        <!-- Created -->
        <div class="text-center">
          <div class="text-xs text-gray-500">{{ t('facilitator.created') }}</div>
          <div class="text-sm text-gray-700">{{ formatDate(session.created_at) }}</div>
        </div>

        <!-- Actions -->
        <div class="flex gap-2">
          <button
            class="rounded-md border border-gray-300 px-3 py-1 text-xs font-medium text-gray-700 transition hover:bg-gray-100"
            @click="toggleStatus(session)"
          >
            {{ session.status === 'open' ? t('facilitator.close') : t('facilitator.reopen') }}
          </button>
          <router-link
            :to="{ name: 'results', params: { id: session.id } }"
            class="rounded-md border border-blue-300 px-3 py-1 text-xs font-medium text-blue-700 no-underline transition hover:bg-blue-50"
          >
            {{ t('facilitator.viewResults') }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
