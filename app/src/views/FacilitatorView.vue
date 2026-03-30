<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import { useI18n } from '../i18n'
import { useAssessmentStore } from '../stores/assessment'
import AdminGate from '../components/AdminGate.vue'
import {
  createSession,
  getSessions,
  updateSessionStatus,
  deleteSession as apiDeleteSession,
  bulkArchiveTeam,
  type Session,
  type ContextProfile,
} from '../api/client'

const { t } = useI18n()
const assessmentStore = useAssessmentStore()

const sessions = ref<Session[]>([])
const loading = ref(false)

// Form state
const newType = ref('pulse_check')
const newTeam = ref('')
const creating = ref(false)
const selectedDimensions = ref<string[]>(['C', 'R', 'A', 'F', 'T'])

const allDimensions = ['C', 'R', 'A', 'F', 'T'] as const
const dimensionNames: Record<string, string> = {
  C: 'Compliance & Governance',
  R: 'Readiness',
  A: 'Adoption & Usage',
  F: 'Flow & Process',
  T: 'Technical Enablement',
}

const newProfile = ref<ContextProfile>('generic')

const contextProfiles: { value: ContextProfile; label: string }[] = [
  { value: 'generic', label: 'Generisch' },
  { value: 'agile_open', label: 'Agil & Offen' },
  { value: 'enterprise_regulated', label: 'Enterprise Reguliert' },
  { value: 'public_sector', label: 'Public Sector' },
  { value: 'corporate_liberal', label: 'Konzern Liberal' },
]

const isDeepDive = computed(() => newType.value === 'deep_dive')

function toggleDimension(dim: string) {
  const idx = selectedDimensions.value.indexOf(dim)
  if (idx >= 0) {
    if (selectedDimensions.value.length > 1) {
      selectedDimensions.value.splice(idx, 1)
    }
  } else {
    selectedDimensions.value.push(dim)
  }
}

// Cycle state
const newCycle = ref<number | null>(null)

const suggestedCycle = computed(() => {
  const team = newTeam.value.trim()
  if (!team) return 1
  const teamSessions = sessions.value.filter((s) => s.team === team)
  const maxCycle = Math.max(0, ...teamSessions.map((s) => s.cycle ?? 0))
  return maxCycle + 1
})

watch(() => newTeam.value, () => {
  newCycle.value = suggestedCycle.value
})

// Filter state
const statusFilter = ref<'active' | 'archived'>('active')
const teamSearch = ref('')
const expandedTeams = ref(new Set<string>())
const expandedCycles = ref(new Set<string>())

const availableTypes = computed(() => {
  const types: { value: string; label: string }[] = []
  for (const [, bank] of assessmentStore.questionBanks) {
    const exploType = bank.exploration_type
    if (exploType === 'pulse_check') {
      types.push({ value: 'pulse_check', label: t('assessment.pulseCheck') })
    } else if (exploType === 'deep_dive') {
      types.push({ value: 'deep_dive', label: t('assessment.deepDive') })
    } else if (exploType === 'context_readiness') {
      types.push({ value: 'context_readiness', label: t('assessment.contextReadiness') })
    }
  }
  if (types.length === 0) {
    types.push({ value: 'pulse_check', label: t('assessment.pulseCheck') })
  }
  return types
})

// Filtered sessions based on status + team search
const filteredSessions = computed(() => {
  return sessions.value.filter((s) => {
    // Status filter
    if (statusFilter.value === 'active' && s.status === 'archived') return false
    if (statusFilter.value === 'archived' && s.status !== 'archived') return false
    // Team search
    if (teamSearch.value) {
      return s.team.toLowerCase().includes(teamSearch.value.toLowerCase())
    }
    return true
  })
})

// Group filtered sessions by team → cycle, sorted by most recent
type CycleGroup = { cycle: number; sessions: Session[] }
type TeamGroup = { team: string; cycles: CycleGroup[]; allSessions: Session[] }

const groupedByTeamAndCycle = computed<TeamGroup[]>(() => {
  const teams = new Map<string, Session[]>()
  for (const s of filteredSessions.value) {
    if (!teams.has(s.team)) teams.set(s.team, [])
    teams.get(s.team)!.push(s)
  }

  const result: TeamGroup[] = []
  for (const [team, allSessions] of teams) {
    // Group by cycle
    const cycleMap = new Map<number, Session[]>()
    for (const s of allSessions) {
      const c = s.cycle ?? 0
      if (!cycleMap.has(c)) cycleMap.set(c, [])
      cycleMap.get(c)!.push(s)
    }
    // Sort sessions within each cycle: newest first
    for (const [, arr] of cycleMap) {
      arr.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    }
    // Sort cycles: highest (newest) first
    const cycles = [...cycleMap.entries()]
      .sort((a, b) => b[0] - a[0])
      .map(([cycle, sessions]) => ({ cycle, sessions }))

    result.push({ team, cycles, allSessions })
  }

  // Sort teams by most recent session
  result.sort((a, b) => {
    const aMax = Math.max(...a.allSessions.map((s) => new Date(s.created_at).getTime()))
    const bMax = Math.max(...b.allSessions.map((s) => new Date(s.created_at).getTime()))
    return bMax - aMax
  })

  return result
})

async function loadSessions() {
  loading.value = true
  try {
    sessions.value = await getSessions()
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
    const dims = isDeepDive.value && selectedDimensions.value.length < 5 ? [...selectedDimensions.value] : undefined
    const cycle = newCycle.value && newCycle.value > 0 ? newCycle.value : undefined
    const profile = newProfile.value !== 'generic' ? newProfile.value : undefined
    await createSession(newType.value, newTeam.value.trim(), dims, cycle, profile)
    // Auto-expand the team after creation
    expandedTeams.value.add(newTeam.value.trim())
    newTeam.value = ''
    await loadSessions()
  } catch (err) {
    console.error('Failed to create session:', err)
  } finally {
    creating.value = false
  }
}

async function setStatus(session: Session, status: 'open' | 'closed' | 'archived') {
  try {
    await updateSessionStatus(session.id, status)
    await loadSessions()
  } catch (err) {
    console.error('Failed to update session:', err)
  }
}

function toggleTeam(team: string) {
  if (expandedTeams.value.has(team)) {
    expandedTeams.value.delete(team)
  } else {
    expandedTeams.value.add(team)
  }
}

function cycleKey(team: string, cycle: number): string {
  return `${team}:${cycle}`
}

function toggleCycle(team: string, cycle: number) {
  const key = cycleKey(team, cycle)
  if (expandedCycles.value.has(key)) {
    expandedCycles.value.delete(key)
  } else {
    expandedCycles.value.add(key)
  }
}

function cycleLabel(cycle: number): string {
  if (cycle === 0) return t('facilitator.noCycle')
  return `${t('facilitator.cycle')} ${cycle}`
}

function openCount(teamSessions: Session[]): number {
  return teamSessions.filter((s) => s.status === 'open').length
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

function sessionTypeLabel(type: string): string {
  if (type === 'pulse_check') return t('assessment.pulseCheck')
  if (type === 'deep_dive') return t('assessment.deepDive')
  if (type === 'context_readiness') return t('assessment.contextReadiness')
  // Legacy deep-dive types
  if (type.startsWith('deep_dive_')) {
    const dim = type.replace('deep_dive_', '').charAt(0).toUpperCase()
    return `${t('assessment.deepDive')} (${dim})`
  }
  return type
}

function statusLabel(status: string): string {
  if (status === 'open') return t('facilitator.open')
  if (status === 'closed') return t('facilitator.closed')
  if (status === 'archived') return t('facilitator.archived')
  return status
}

function statusClasses(status: string): string {
  if (status === 'open') return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
  if (status === 'archived') return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
  return 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
}

// Confirmation dialog
const confirmAction = ref<{ type: 'delete' | 'bulkArchive'; label: string; action: () => Promise<void> } | null>(null)

async function handleBulkArchive(team: string) {
  confirmAction.value = {
    type: 'bulkArchive',
    label: `${t('facilitator.archiveAll')} "${team}"?`,
    action: async () => {
      await bulkArchiveTeam(team)
      await loadSessions()
    },
  }
}

async function handleDelete(session: Session) {
  confirmAction.value = {
    type: 'delete',
    label: `${t('facilitator.deleteConfirm')} (${session.code})?`,
    action: async () => {
      await apiDeleteSession(session.id)
      await loadSessions()
    },
  }
}

async function confirmAndExecute() {
  if (!confirmAction.value) return
  try {
    await confirmAction.value.action()
  } catch (err) {
    console.error('Action failed:', err)
  } finally {
    confirmAction.value = null
  }
}

onMounted(() => {
  loadSessions()
  // Auto-expand all teams initially
  // Will be populated once sessions are loaded
})
</script>

<template>
  <AdminGate>
  <div class="mx-auto max-w-4xl px-4 py-8">
    <router-link to="/" class="mb-4 inline-flex items-center gap-1 text-sm text-blue-600 hover:underline dark:text-blue-400">
      &larr; {{ t('facilitator.backHome') }}
    </router-link>
    <h1 class="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">{{ t('facilitator.title') }}</h1>

    <!-- Create session form -->
    <div class="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <h2 class="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">{{ t('facilitator.createSession') }}</h2>
      <form class="flex flex-wrap items-end gap-4" @submit.prevent="handleCreate">
        <div class="min-w-[180px] flex-1">
          <label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ t('facilitator.sessionType') }}
          </label>
          <select
            v-model="newType"
            class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
          >
            <option v-for="at in availableTypes" :key="at.value" :value="at.value">
              {{ at.label }}
            </option>
          </select>
        </div>
        <div class="min-w-[180px] flex-1">
          <label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ t('facilitator.teamName') }}
          </label>
          <input
            v-model="newTeam"
            type="text"
            :placeholder="t('facilitator.teamPlaceholder')"
            class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400"
          />
        </div>
        <div class="w-20">
          <label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ t('facilitator.cycle') }}
          </label>
          <input
            v-model.number="newCycle"
            type="number"
            min="1"
            :placeholder="String(suggestedCycle)"
            class="w-full rounded-md border border-gray-300 px-3 py-2 text-center focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400"
          />
        </div>
        <div class="min-w-[160px]">
          <label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ t('facilitator.contextProfile') }}
          </label>
          <select
            v-model="newProfile"
            class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
          >
            <option v-for="p in contextProfiles" :key="p.value" :value="p.value">
              {{ p.label }}
            </option>
          </select>
        </div>
        <button
          type="submit"
          :disabled="creating || !newTeam.trim()"
          class="rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-blue-700 disabled:opacity-50"
        >
          {{ t('facilitator.create') }}
        </button>
      </form>
      <!-- Dimension selector (Deep-Dive only) -->
      <div v-if="isDeepDive" class="mt-4 border-t border-gray-100 pt-4 dark:border-gray-700">
        <div class="mb-2 flex items-center gap-2">
          <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ t('facilitator.selectDimensions') }}</span>
          <span class="text-xs text-gray-400 dark:text-gray-500">{{ t('facilitator.dimensionHint') }}</span>
        </div>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="dim in allDimensions"
            :key="dim"
            type="button"
            class="rounded-full border px-3 py-1 text-sm font-medium transition"
            :class="[
              selectedDimensions.includes(dim)
                ? 'border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                : 'border-gray-300 text-gray-500 hover:border-gray-400 dark:border-gray-600 dark:text-gray-400',
            ]"
            :title="dimensionNames[dim]"
            @click="toggleDimension(dim)"
          >
            {{ dim }}
          </button>
        </div>
      </div>
    </div>

    <!-- Filter bar -->
    <div class="mb-4 flex flex-wrap items-center gap-3">
      <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">{{ t('facilitator.sessions') }}</h2>
      <div class="flex-1" />
      <!-- Status filter buttons -->
      <div class="flex rounded-md border border-gray-300 text-sm dark:border-gray-600">
        <button
          class="rounded-l-md px-3 py-1 transition"
          :class="statusFilter === 'active' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'"
          @click="statusFilter = 'active'"
        >
          {{ t('facilitator.allStatuses') }}
        </button>
        <button
          class="rounded-r-md border-l border-gray-300 px-3 py-1 transition dark:border-gray-600"
          :class="statusFilter === 'archived' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'"
          @click="statusFilter = 'archived'"
        >
          {{ t('facilitator.archived') }}
        </button>
      </div>
      <!-- Team search -->
      <input
        v-model="teamSearch"
        type="text"
        :placeholder="t('facilitator.searchTeam')"
        class="w-48 rounded-md border border-gray-300 px-3 py-1 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400"
      />
    </div>

    <!-- Loading -->
    <div v-if="loading" class="py-8 text-center text-gray-500 dark:text-gray-400">...</div>

    <!-- Empty state -->
    <div v-else-if="sessions.length === 0" class="rounded-lg border border-gray-200 bg-white p-8 text-center text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
      {{ t('facilitator.noSessions') }}
    </div>

    <!-- No matching teams -->
    <div v-else-if="groupedByTeamAndCycle.length === 0" class="rounded-lg border border-gray-200 bg-white p-8 text-center text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
      {{ t('facilitator.noMatchingTeams') }}
    </div>

    <!-- Team groups -->
    <div v-else class="space-y-3">
      <div
        v-for="group in groupedByTeamAndCycle"
        :key="group.team"
        class="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
      >
        <!-- Team header -->
        <div class="flex items-center">
          <button
            class="flex flex-1 items-center gap-3 px-5 py-3 text-left transition hover:bg-gray-50 dark:hover:bg-gray-700/50"
            @click="toggleTeam(group.team)"
          >
            <svg
              class="h-4 w-4 shrink-0 text-gray-400 transition-transform dark:text-gray-500"
              :class="{ 'rotate-90': expandedTeams.has(group.team) }"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span class="font-semibold text-gray-900 dark:text-gray-100">{{ group.team }}</span>
            <span class="text-xs text-gray-500 dark:text-gray-400">
              {{ group.allSessions.length }} {{ group.allSessions.length === 1 ? 'Session' : 'Sessions' }}
            </span>
            <span v-if="openCount(group.allSessions) > 0" class="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
              {{ openCount(group.allSessions) }} {{ t('facilitator.open').toLowerCase() }}
            </span>
          </button>
          <!-- Bulk archive button -->
          <button
            v-if="group.allSessions.some((s) => s.status !== 'archived')"
            class="mr-3 rounded-md border border-yellow-300 px-2 py-1 text-xs font-medium text-yellow-700 transition hover:bg-yellow-50 dark:border-yellow-600 dark:text-yellow-400 dark:hover:bg-yellow-900/20"
            :title="t('facilitator.archiveAll')"
            @click.stop="handleBulkArchive(group.team)"
          >
            {{ t('facilitator.archiveAll') }}
          </button>
        </div>

        <!-- Cycles (expanded team) -->
        <div v-if="expandedTeams.has(group.team)" class="border-t border-gray-100 dark:border-gray-700">
          <template v-for="cg in group.cycles" :key="cg.cycle">
            <!-- Cycle header (only if team has multiple cycles or cycle > 0) -->
            <button
              v-if="group.cycles.length > 1 || cg.cycle > 0"
              class="flex w-full items-center gap-2 border-b border-gray-50 bg-gray-50/50 px-8 py-2 text-left text-sm transition hover:bg-gray-100/50 dark:border-gray-700/50 dark:bg-gray-750 dark:hover:bg-gray-700/30"
              @click="toggleCycle(group.team, cg.cycle)"
            >
              <svg
                class="h-3 w-3 shrink-0 text-gray-400 transition-transform dark:text-gray-500"
                :class="{ 'rotate-90': expandedCycles.has(cycleKey(group.team, cg.cycle)) }"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <span class="font-medium text-gray-700 dark:text-gray-300">{{ cycleLabel(cg.cycle) }}</span>
              <span class="text-xs text-gray-400 dark:text-gray-500">{{ cg.sessions.length }} Sessions</span>
              <span v-if="openCount(cg.sessions) > 0" class="rounded-full bg-green-100 px-1.5 py-0.5 text-xs text-green-700 dark:bg-green-900/30 dark:text-green-400">
                {{ openCount(cg.sessions) }} {{ t('facilitator.open').toLowerCase() }}
              </span>
            </button>

            <!-- Session rows (expanded cycle, or single-cycle teams show directly) -->
            <template v-if="group.cycles.length <= 1 && cg.cycle === 0 || expandedCycles.has(cycleKey(group.team, cg.cycle))">
              <div
                v-for="session in cg.sessions"
                :key="session.id"
                class="flex flex-wrap items-center gap-4 border-b border-gray-50 px-5 py-3 last:border-b-0 dark:border-gray-700/50"
              >
                <!-- Type + Dimensions -->
                <div class="min-w-[120px]">
                  <div class="text-sm font-medium text-gray-800 dark:text-gray-200">
                    {{ sessionTypeLabel(session.type) }}
                    <span v-if="session.type !== 'context_readiness' && session.dimensions && session.dimensions.length < 5" class="ml-1 text-xs text-gray-500 dark:text-gray-400">
                      ({{ session.dimensions.join(', ') }})
                    </span>
                  </div>
                  <div v-if="session.context_profile" class="mt-0.5 text-xs text-purple-600 dark:text-purple-400">
                    {{ contextProfiles.find((p) => p.value === session.context_profile)?.label ?? session.context_profile }}
                  </div>
                </div>

                <!-- Code -->
                <div class="text-center">
                  <div class="font-mono text-sm font-bold tracking-widest text-blue-700 dark:text-blue-400">{{ session.code }}</div>
                </div>

                <!-- Status badge -->
                <span
                  :class="[
                    'inline-block rounded-full px-2 py-0.5 text-xs font-medium',
                    statusClasses(session.status),
                  ]"
                >
                  {{ statusLabel(session.status) }}
                </span>

                <!-- Response count -->
                <div class="text-center text-xs text-gray-500 dark:text-gray-400">
                  {{ session.response_count ?? 0 }} {{ t('facilitator.responses') }}
                </div>

                <!-- Created date -->
                <div class="text-xs text-gray-500 dark:text-gray-400">{{ formatDate(session.created_at) }}</div>

                <!-- Spacer -->
                <div class="flex-1" />

                <!-- Actions -->
                <div class="flex gap-2">
                  <template v-if="session.status === 'open'">
                    <button
                      class="rounded-md border border-gray-300 px-3 py-1 text-xs font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                      @click="setStatus(session, 'closed')"
                    >
                      {{ t('facilitator.close') }}
                    </button>
                  </template>
                  <template v-else-if="session.status === 'closed'">
                    <button
                      class="rounded-md border border-gray-300 px-3 py-1 text-xs font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                      @click="setStatus(session, 'open')"
                    >
                      {{ t('facilitator.reopen') }}
                    </button>
                    <button
                      class="rounded-md border border-yellow-300 px-3 py-1 text-xs font-medium text-yellow-700 transition hover:bg-yellow-50 dark:border-yellow-600 dark:text-yellow-400 dark:hover:bg-yellow-900/20"
                      @click="setStatus(session, 'archived')"
                    >
                      {{ t('facilitator.archive') }}
                    </button>
                  </template>
                  <template v-else-if="session.status === 'archived'">
                    <button
                      class="rounded-md border border-gray-300 px-3 py-1 text-xs font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                      @click="setStatus(session, 'closed')"
                    >
                      {{ t('facilitator.restore') }}
                    </button>
                    <button
                      class="rounded-md border border-red-300 px-3 py-1 text-xs font-medium text-red-700 transition hover:bg-red-50 dark:border-red-600 dark:text-red-400 dark:hover:bg-red-900/20"
                      @click="handleDelete(session)"
                    >
                      {{ t('facilitator.delete') }}
                    </button>
                  </template>
                  <router-link
                    :to="{ name: 'results', params: { id: session.id } }"
                    class="rounded-md border border-blue-300 px-3 py-1 text-xs font-medium text-blue-700 no-underline transition hover:bg-blue-50 dark:border-blue-600 dark:text-blue-400 dark:hover:bg-blue-900/20"
                  >
                    {{ t('facilitator.viewResults') }}
                  </router-link>
                </div>
              </div>
            </template>
          </template>
        </div>
      </div>
    </div>
    <!-- Confirmation dialog -->
    <Teleport to="body">
      <div
        v-if="confirmAction"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
        @click.self="confirmAction = null"
      >
        <div class="mx-4 w-full max-w-sm rounded-lg bg-white p-6 shadow-xl dark:bg-gray-800">
          <p class="mb-4 text-sm text-gray-800 dark:text-gray-200">{{ confirmAction.label }}</p>
          <div class="flex justify-end gap-3">
            <button
              class="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
              @click="confirmAction = null"
            >
              {{ t('facilitator.cancel') }}
            </button>
            <button
              class="rounded-md px-4 py-2 text-sm font-medium text-white transition"
              :class="[
                confirmAction.type === 'delete'
                  ? 'bg-red-600 hover:bg-red-700'
                  : 'bg-yellow-600 hover:bg-yellow-700',
              ]"
              @click="confirmAndExecute"
            >
              {{ confirmAction.type === 'delete' ? t('facilitator.delete') : t('facilitator.archiveAll') }}
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
  </AdminGate>
</template>
