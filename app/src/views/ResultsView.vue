<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from '../i18n'
import { useAssessmentStore } from '../stores/assessment'
import { getSession, getSessionResults } from '../api/client'
import { localized } from '../utils/localized'
import type { Session } from '../api/client'
import type { SessionResult, DiagnosticSummary } from '../types/scoring'
import type { Locale, QuestionBank } from '../types/question'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'
import { Radar, Bar } from 'vue-chartjs'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, BarElement, CategoryScale, LinearScale)

const route = useRoute()
const { t, locale } = useI18n()
const assessmentStore = useAssessmentStore()

const sessionId = route.params.id as string
const session = ref<Session | null>(null)
const result = ref<SessionResult | null>(null)
const bank = ref<QuestionBank | null>(null)
const loading = ref(true)
const error = ref('')

// Detect dark mode reactively
const isDark = ref(document.documentElement.classList.contains('dark'))
const observer = new MutationObserver(() => {
  isDark.value = document.documentElement.classList.contains('dark')
})

onMounted(() => {
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
})
onUnmounted(() => observer.disconnect())

async function loadResults(silent = false) {
  if (!silent) {
    loading.value = true
  }
  error.value = ''
  try {
    const [sess, res] = await Promise.all([
      getSession(sessionId),
      getSessionResults(sessionId),
    ])
    session.value = sess
    result.value = res
    bank.value = assessmentStore.questionBanks.get(sess.type) ?? null
  } catch (e) {
    if (!silent) error.value = (e as Error).message
  } finally {
    loading.value = false
  }
}

onMounted(loadResults)

// Auto-refresh every 30s (silent — no loading spinner, no scroll reset)
let refreshTimer: ReturnType<typeof setInterval> | null = null
onMounted(() => {
  refreshTimer = setInterval(() => loadResults(true), 30_000)
})
onUnmounted(() => {
  if (refreshTimer) clearInterval(refreshTimer)
})

const isContextReadiness = computed(() => session.value?.type === 'context_readiness')

// --- Dimension / Category display names ---
function categoryName(catKey: string): string {
  if (!bank.value) return catKey
  const cat = bank.value.categories?.find((c) => c.key === catKey)
  if (cat) return localized(cat.name, locale.value as Locale)
  return catKey
}

function dimensionName(dimKey: string): string {
  if (!bank.value) return dimKey
  const dim = bank.value.dimensions?.find((d) => d.key === dimKey)
  if (dim) return localized(dim.name, locale.value as Locale)
  if (bank.value.dimension === dimKey && bank.value.dimension_name) {
    return localized(bank.value.dimension_name, locale.value as Locale)
  }
  return dimKey
}

// --- Radar Chart ---
const chartData = computed(() => {
  if (!result.value) return { labels: [] as string[], datasets: [] }
  const scores = result.value.scores
  return {
    labels: scores.map((s) => dimensionName(s.dimension)),
    datasets: [
      {
        label: 'CRAFT Score',
        data: scores.map((s) => s.score),
        backgroundColor: isDark.value ? 'rgba(96, 165, 250, 0.2)' : 'rgba(59, 130, 246, 0.2)',
        borderColor: isDark.value ? 'rgb(96, 165, 250)' : 'rgb(59, 130, 246)',
        borderWidth: 2,
        pointBackgroundColor: isDark.value ? 'rgb(96, 165, 250)' : 'rgb(59, 130, 246)',
        pointRadius: 4,
      },
    ],
  }
})

const chartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    r: {
      min: 0,
      max: 5,
      ticks: {
        stepSize: 1,
        display: true,
        color: isDark.value ? '#9ca3af' : undefined,
        backdropColor: isDark.value ? 'transparent' : undefined,
      },
      grid: { color: isDark.value ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)' },
      angleLines: { color: isDark.value ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)' },
      pointLabels: {
        font: { size: 13, weight: 'bold' as const },
        color: isDark.value ? '#d1d5db' : undefined,
      },
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: (ctx: { raw: unknown }) => `Score: ${ctx.raw}`,
      },
    },
  },
}))

// --- Readiness Bar Chart (Context & Readiness) ---
const barData = computed(() => {
  if (!result.value) return { labels: [] as string[], datasets: [] }
  const scores = result.value.scores
  return {
    labels: scores.map((s) => categoryName(s.dimension)),
    datasets: [
      {
        label: t('results.readinessScore'),
        data: scores.map((s) => s.score),
        backgroundColor: scores.map((s) => {
          if (s.score >= 70) return isDark.value ? 'rgba(34, 197, 94, 0.7)' : 'rgba(34, 197, 94, 0.8)'
          if (s.score >= 50) return isDark.value ? 'rgba(234, 179, 8, 0.7)' : 'rgba(234, 179, 8, 0.8)'
          return isDark.value ? 'rgba(239, 68, 68, 0.7)' : 'rgba(239, 68, 68, 0.8)'
        }),
        borderWidth: 0,
        borderRadius: 4,
      },
    ],
  }
})

const barOptions = computed(() => ({
  indexAxis: 'y' as const,
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      min: 0,
      max: 100,
      ticks: {
        stepSize: 25,
        callback: (v: number | string) => `${v}%`,
        color: isDark.value ? '#9ca3af' : undefined,
      },
      grid: { color: isDark.value ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)' },
    },
    y: {
      ticks: {
        color: isDark.value ? '#d1d5db' : undefined,
        font: { weight: 'bold' as const },
      },
      grid: { display: false },
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: (ctx: { raw: unknown }) => `${ctx.raw}%`,
      },
    },
  },
}))

function readinessScoreColor(score: number): string {
  if (score >= 70) return 'text-green-600 dark:text-green-400'
  if (score >= 50) return 'text-yellow-600 dark:text-yellow-400'
  return 'text-red-600 dark:text-red-400'
}

// --- Diagnostics ---
function diagnosticQuestionText(diag: DiagnosticSummary): string {
  if (!bank.value) return diag.question_key
  const q = bank.value.questions.find((qu) => qu.question_key === diag.question_key)
  if (!q) return diag.question_key
  return localized(q.question_text, locale.value as Locale)
}

function diagnosticOptionLabel(diag: DiagnosticSummary, optionKey: string): string {
  if (!bank.value) return optionKey
  const q = bank.value.questions.find((qu) => qu.question_key === diag.question_key)
  const opt = q?.answer_options?.find((o) => o.key === optionKey)
  if (!opt) return optionKey
  return opt[locale.value as 'de' | 'en'] ?? optionKey
}

// --- Diagnostic option entries: all options (incl. 0 count), "other" always last ---
function diagnosticEntries(diag: DiagnosticSummary): [string, number][] {
  if (!bank.value) {
    return Object.entries(diag.counts).sort((a, b) => b[1] - a[1])
  }
  const q = bank.value.questions.find((qu) => qu.question_key === diag.question_key)
  if (!q?.answer_options) {
    return Object.entries(diag.counts).sort((a, b) => b[1] - a[1])
  }
  // Build entries from all defined options (preserving order, adding 0 for missing)
  const entries: [string, number][] = q.answer_options
    .filter((o) => o.key !== 'other')
    .map((o) => [o.key, diag.counts[o.key] ?? 0] as [string, number])
  // Sort non-other by count descending
  entries.sort((a, b) => b[1] - a[1])
  // Append "other" at the end if it exists as an option
  const otherOpt = q.answer_options.find((o) => o.key === 'other')
  if (otherOpt) {
    entries.push(['other', diag.counts['other'] ?? 0])
  }
  return entries
}

// --- Sub-Topics for Deep-Dive ---
function subTopicName(stKey: string): string {
  if (!bank.value) return stKey
  // Search top-level sub_topics (legacy)
  const st = bank.value.sub_topics?.find((s) => s.key === stKey)
  if (st) return localized(st.name, locale.value as Locale)
  // Fallback: search inside dimensions[].sub_topics (combined deep-dive)
  for (const dim of bank.value.dimensions ?? []) {
    const nested = dim.sub_topics?.find((s) => s.key === stKey)
    if (nested) return localized(nested.name, locale.value as Locale)
  }
  return stKey
}

// --- Score color ---
function scoreColor(score: number): string {
  if (score >= 4) return 'text-green-600 dark:text-green-400'
  if (score >= 3) return 'text-blue-600 dark:text-blue-400'
  if (score >= 2) return 'text-yellow-600 dark:text-yellow-400'
  return 'text-red-600 dark:text-red-400'
}

// --- JSON Export ---
function exportJSON() {
  if (!result.value || !session.value) return
  const exportData = {
    export_version: '1.0',
    exported_at: new Date().toISOString(),
    session: {
      id: session.value.id,
      code: session.value.code,
      type: session.value.type,
      team: session.value.team,
      status: session.value.status,
      created_at: session.value.created_at,
    },
    results: result.value,
  }
  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `craft-results-${session.value.team.replace(/\s+/g, '-').toLowerCase()}-${new Date().toISOString().slice(0, 10)}.json`
  a.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <!-- Loading -->
  <div v-if="loading" class="flex items-center justify-center py-20">
    <p class="text-gray-500 dark:text-gray-400">{{ t('results.loading') }}</p>
  </div>

  <!-- Error -->
  <div v-else-if="error" class="mx-auto max-w-3xl px-4 py-12 text-center">
    <div class="rounded-lg border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
      <p class="text-red-700 dark:text-red-400">{{ error }}</p>
    </div>
  </div>

  <!-- Results -->
  <div v-else-if="result && session" class="mx-auto max-w-4xl px-4 py-8">
    <!-- Header -->
    <div class="mb-8 flex flex-wrap items-start justify-between gap-4">
      <div>
        <h1 class="text-2xl font-bold text-gray-900 dark:text-gray-100">{{ t('results.title') }}</h1>
        <div class="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 dark:text-gray-400">
          <span>{{ t('results.team') }}: <strong>{{ session.team }}</strong></span>
          <span>{{ t('results.sessionType') }}: <strong>{{ session.type.replace('_', ' ') }}</strong></span>
          <span>{{ t('results.respondents') }}: <strong>{{ result.respondent_count }}</strong></span>
        </div>
      </div>
      <div class="flex gap-2">
        <button
          class="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
          @click="loadResults()"
        >
          {{ t('results.refresh') }}
        </button>
        <button
          class="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          @click="exportJSON"
        >
          {{ t('results.export') }}
        </button>
      </div>
    </div>

    <!-- No results -->
    <div v-if="result.respondent_count === 0" class="rounded-lg border border-gray-200 bg-white p-8 text-center dark:border-gray-700 dark:bg-gray-800">
      <p class="text-gray-500 dark:text-gray-400">{{ t('results.noResults') }}</p>
    </div>

    <template v-else>
      <!-- Context & Readiness: Bar Chart + Score Table -->
      <template v-if="isContextReadiness">
        <div class="mb-8 grid gap-6 lg:grid-cols-2">
          <!-- Readiness Bar Chart -->
          <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h2 class="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">{{ t('results.readinessProfile') }}</h2>
            <div style="height: 280px">
              <Bar :data="barData" :options="barOptions" />
            </div>
          </div>

          <!-- Readiness Score Table -->
          <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h2 class="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">{{ t('results.scoreTable') }}</h2>
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-gray-200 text-left text-xs font-medium uppercase tracking-wide text-gray-500 dark:border-gray-700 dark:text-gray-400">
                  <th class="pb-2">{{ t('results.category') }}</th>
                  <th class="pb-2 text-right">{{ t('results.score') }}</th>
                  <th class="pb-2 text-right">{{ t('results.level') }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="s in result.scores" :key="s.dimension" class="border-b border-gray-100 dark:border-gray-700">
                  <td class="py-2.5 font-medium text-gray-900 dark:text-gray-100">{{ categoryName(s.dimension) }}</td>
                  <td class="py-2.5 text-right font-mono font-bold" :class="readinessScoreColor(s.score)">{{ s.score }}%</td>
                  <td class="py-2.5 text-right text-gray-600 dark:text-gray-400">{{ s.label }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </template>

      <!-- Pulse Check / Deep-Dive: Radar Chart + Score Table -->
      <template v-else>
        <div class="mb-8 grid gap-6 lg:grid-cols-2">
          <!-- Radar Chart -->
          <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h2 class="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">{{ t('results.spiderChart') }}</h2>
            <div class="mx-auto max-w-sm">
              <Radar :data="chartData" :options="chartOptions" />
            </div>
          </div>

          <!-- Score Table -->
          <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h2 class="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">{{ t('results.scoreTable') }}</h2>
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-gray-200 text-left text-xs font-medium uppercase tracking-wide text-gray-500 dark:border-gray-700 dark:text-gray-400">
                  <th class="pb-2">{{ t('results.dimension') }}</th>
                  <th class="pb-2 text-right">{{ t('results.score') }}</th>
                  <th class="pb-2 text-right">{{ t('results.level') }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="s in result.scores" :key="s.dimension" class="border-b border-gray-100 dark:border-gray-700">
                  <td class="py-2.5 font-medium text-gray-900 dark:text-gray-100">{{ dimensionName(s.dimension) }}</td>
                  <td class="py-2.5 text-right font-mono font-bold" :class="scoreColor(s.score)">{{ s.score }} <span class="text-xs font-normal text-gray-400">/ 5</span></td>
                  <td class="py-2.5 text-right text-gray-600 dark:text-gray-400">{{ s.label }}</td>
                </tr>
              </tbody>
            </table>

            <!-- Sub-Topics (Deep-Dive only), grouped by dimension -->
            <template v-for="s in result.scores" :key="'st-' + s.dimension">
              <div v-if="s.sub_topics && s.sub_topics.length > 0" class="mt-5 border-t border-gray-100 pt-4 dark:border-gray-700">
                <h3 class="mb-1 text-sm font-semibold text-gray-900 dark:text-gray-100">{{ dimensionName(s.dimension) }}</h3>
                <p class="mb-2 text-xs text-gray-400 dark:text-gray-500">{{ t('results.subTopics') }} — Score {{ s.score }} / 5 ({{ s.label }})</p>
                <div class="space-y-1">
                  <div
                    v-for="st in s.sub_topics"
                    :key="st.sub_topic"
                    class="flex items-center justify-between rounded bg-gray-50 px-3 py-1.5 text-sm dark:bg-gray-700/50"
                  >
                    <span class="text-gray-700 dark:text-gray-300">{{ subTopicName(st.sub_topic) }}</span>
                    <span class="font-mono font-bold" :class="scoreColor(st.score)">{{ st.score }} <span class="text-xs font-normal text-gray-400">/ 5</span></span>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </template>

      <!-- Challenges -->
      <div v-if="result.challenges && result.challenges.length > 0" class="mb-6 rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <h2 class="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-100">{{ t('results.challenges') }}</h2>
        <p v-if="result.context_profile" class="mb-4 text-xs text-purple-600 dark:text-purple-400">
          {{ t('results.profileNote') }}: {{ result.context_profile.replace('_', ' ') }}
        </p>
        <div class="space-y-4">
          <div
            v-for="ch in result.challenges"
            :key="ch.challenge_id"
            class="rounded-lg border p-4"
            :class="{
              'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/10': ch.relevance === 'very_high',
              'border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/10': ch.relevance === 'high',
              'border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/10': ch.relevance === 'medium',
              'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800': ch.relevance === 'low',
            }"
          >
            <div class="mb-1 flex items-center gap-2">
              <span class="text-xs font-mono text-gray-400 dark:text-gray-500">{{ ch.challenge_id }}</span>
              <span class="font-medium text-gray-900 dark:text-gray-100">{{ ch.title }}</span>
              <span
                class="rounded-full px-2 py-0.5 text-xs font-medium"
                :class="{
                  'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400': ch.relevance === 'very_high',
                  'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400': ch.relevance === 'high',
                  'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400': ch.relevance === 'medium',
                  'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400': ch.relevance === 'low',
                }"
              >
                {{ t(`results.relevance${ch.relevance.charAt(0).toUpperCase() + ch.relevance.slice(1).replace('_h', 'H')}`) }}
              </span>
            </div>
            <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">{{ ch.description }}</p>
            <div class="flex flex-wrap gap-1">
              <span v-for="sig in ch.signals" :key="sig" class="rounded bg-gray-200 px-2 py-0.5 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                {{ sig }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Cross-Validations -->
      <div v-if="result.cross_validations && result.cross_validations.length > 0" class="mb-6 rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <h2 class="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">{{ t('results.crossValidation') }}</h2>
        <div class="space-y-3">
          <div
            v-for="(cv, idx) in result.cross_validations"
            :key="idx"
            class="flex items-start gap-3 rounded-lg border p-4"
            :class="{
              'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/10': cv.severity === 'critical',
              'border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/10': cv.severity === 'warning',
              'border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/10': cv.severity === 'info',
            }"
          >
            <span
              class="mt-0.5 shrink-0 rounded-full px-2 py-0.5 text-xs font-medium"
              :class="{
                'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400': cv.severity === 'critical',
                'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400': cv.severity === 'warning',
                'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400': cv.severity === 'info',
              }"
            >
              {{ t(`results.severity${cv.severity.charAt(0).toUpperCase() + cv.severity.slice(1)}`) }}
            </span>
            <div>
              <p class="text-sm font-medium text-gray-900 dark:text-gray-100">{{ cv.pattern }} <span class="text-xs text-gray-400">({{ cv.dimensions.join(' / ') }})</span></p>
              <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">{{ cv.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Diagnostics -->
      <div v-if="result.diagnostics.some(d => d.total > 0)" class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <h2 class="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">{{ t('results.diagnostics') }}</h2>
        <div class="space-y-6">
          <div v-for="diag in result.diagnostics.filter(d => d.total > 0)" :key="diag.question_key">
            <h3 class="mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">{{ diagnosticQuestionText(diag) }}</h3>
            <div class="space-y-1.5">
              <div
                v-for="[optKey, count] in diagnosticEntries(diag)"
                :key="optKey"
                class="flex items-center gap-3"
                :class="{ 'opacity-40': count === 0 }"
              >
                <div class="h-2 flex-1 rounded-full bg-gray-100 dark:bg-gray-700">
                  <div
                    class="h-2 rounded-full bg-blue-500"
                    :style="{ width: diag.total > 0 ? `${(count / diag.total) * 100}%` : '0%' }"
                  />
                </div>
                <span class="w-10 text-right font-mono text-xs text-gray-500 dark:text-gray-400">{{ diag.total > 0 ? Math.round((count / diag.total) * 100) : 0 }}%</span>
                <span class="min-w-0 shrink-0 text-sm text-gray-700 dark:text-gray-300" :class="{ 'italic': optKey === 'other' }">{{ diagnosticOptionLabel(diag, optKey) }}</span>
              </div>
            </div>
            <!-- "Other" free text responses -->
            <div v-if="diag.other_texts && diag.other_texts.length > 0" class="mt-2 ml-1 space-y-1">
              <p v-for="(txt, i) in diag.other_texts" :key="i" class="text-xs italic text-gray-500 dark:text-gray-400">
                &ldquo;{{ txt }}&rdquo;
              </p>
            </div>
            <p class="mt-1 text-xs text-gray-400 dark:text-gray-500">{{ diag.total }} {{ t('results.answers') }}</p>
          </div>
        </div>
      </div>
    </template>

    <!-- Footer -->
    <div class="mt-8 flex items-center justify-between text-xs text-gray-400 dark:text-gray-500">
      <router-link to="/facilitator" class="text-blue-600 hover:underline dark:text-blue-400">
        &larr; {{ t('results.back') }}
      </router-link>
      <span>{{ t('results.calculatedAt') }}: {{ new Date(result.calculated_at).toLocaleString() }}</span>
    </div>
  </div>
</template>
