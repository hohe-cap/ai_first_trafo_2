#!/usr/bin/env node
/**
 * Seed script: Creates demo sessions + responses for "Demo Team Alpha".
 * Writes directly to server-data/ — NEVER touches existing user data.
 * All demo IDs start with "demo-" prefix.
 *
 * Usage: node scripts/seed-demo.mjs
 *        npm run seed
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync, readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import yaml from 'js-yaml'

const __dirname = dirname(fileURLToPath(import.meta.url))
const APP_DIR = join(__dirname, '..')
const DATA_DIR = join(APP_DIR, 'server-data')
const YAML_DIR = join(APP_DIR, '..', 'deliverables', 'question_banks')

// ── Helpers ──────────────────────────────────────────────────────────────────

function clamp(min, max, val) {
  return Math.max(min, Math.min(max, val))
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function randomMaturity(target, variance = 1) {
  return clamp(1, 5, Math.round(target + randomInt(-variance, variance)))
}

function pickClosestAnswer(options, targetScore) {
  if (!options || options.length === 0) return null
  const scored = options.filter((o) => o.score != null)
  if (scored.length === 0) return options[randomInt(0, options.length - 1)].key
  scored.sort((a, b) => Math.abs(a.score - targetScore) - Math.abs(b.score - targetScore))
  // Pick from top 2 closest to add some variance
  const pick = scored[randomInt(0, Math.min(1, scored.length - 1))]
  return pick.key
}

function pickDiagnosticAnswers(options, maxSel) {
  if (!options || options.length === 0) return []
  const max = maxSel || options.length
  const count = randomInt(1, Math.min(3, max, options.length))
  return shuffle(options).slice(0, count).map((o) => o.key)
}

function pickSingleChoice(options) {
  if (!options || options.length === 0) return null
  return options[randomInt(0, options.length - 1)].key
}

// Demo free texts for "other" answers (DE)
const OTHER_TEXTS_DE = [
  'Eigenes internes Tool auf Basis von LLaMA',
  'ChatGPT für Recherche und Zusammenfassungen',
  'Perplexity AI für schnelle Faktenprüfung',
  'Cursor IDE mit Claude-Integration',
  'Lokales Ollama-Setup für sensible Daten',
  'Slack-Bot mit GPT-4 Anbindung',
  'Selbst gebaute RAG-Pipeline',
  'Midjourney für Präsentationen',
  'Whisper für Meeting-Transkription',
  'GitHub Copilot (privater Account)',
]

function pickOtherText() {
  return OTHER_TEXTS_DE[randomInt(0, OTHER_TEXTS_DE.length - 1)]
}

function makeTimestamp(daysAgo, hoursOffset = 0) {
  const d = new Date()
  d.setDate(d.getDate() - daysAgo)
  d.setHours(d.getHours() + hoursOffset)
  return d.toISOString()
}

// ── YAML Loading ─────────────────────────────────────────────────────────────

function loadYaml(filename) {
  const path = join(YAML_DIR, filename)
  return yaml.load(readFileSync(path, 'utf-8'))
}

// ── Response Generation ──────────────────────────────────────────────────────

function generatePulseCheckResponse(bank, respondentId, sessionId, maturityTarget) {
  const answers = {}
  const otherTexts = {}

  for (const q of bank.questions) {
    if (q.question_type === 'maturity') {
      answers[q.question_key] = randomMaturity(maturityTarget, 1)
    } else if (q.question_type === 'diagnostic') {
      if (q.allow_multiple || q.answer_type === 'multiple_choice') {
        answers[q.question_key] = pickDiagnosticAnswers(q.answer_options, q.max_selections)
      } else {
        answers[q.question_key] = pickSingleChoice(q.answer_options)
      }
      // Generate free text for "other" answers (~40% chance)
      const selected = Array.isArray(answers[q.question_key]) ? answers[q.question_key] : [answers[q.question_key]]
      if (selected.includes('other') && Math.random() < 0.4) {
        otherTexts[q.question_key] = pickOtherText()
      }
    } else if (q.question_type === 'powerful_question') {
      // Optional — leave empty
    }
  }

  return {
    id: respondentId,
    session_id: sessionId,
    segmentation: { team_cluster: sessionId.split('-').pop() },
    answers,
    other_texts: Object.keys(otherTexts).length > 0 ? otherTexts : undefined,
    started_at: makeTimestamp(1, -1),
    updated_at: makeTimestamp(1),
    completed_at: makeTimestamp(1),
  }
}

function generateDeepDiveResponse(bank, respondentId, sessionId, maturityTarget) {
  const answers = {}
  const otherTexts = {}

  for (const q of bank.questions) {
    if (q.question_type === 'maturity') {
      answers[q.question_key] = randomMaturity(maturityTarget, 1)
    } else if (q.question_type === 'diagnostic' || q.question_type === 'context') {
      if (q.allow_multiple || q.answer_type === 'multiple_choice') {
        answers[q.question_key] = pickDiagnosticAnswers(q.answer_options, q.max_selections)
      } else {
        answers[q.question_key] = pickSingleChoice(q.answer_options)
      }
      // Generate free text for "other" answers (~40% chance)
      const selected = Array.isArray(answers[q.question_key]) ? answers[q.question_key] : [answers[q.question_key]]
      if (selected.includes('other') && Math.random() < 0.4) {
        otherTexts[q.question_key] = pickOtherText()
      }
    } else if (q.question_type === 'powerful_question') {
      // Optional — leave empty
    }
  }

  return {
    id: respondentId,
    session_id: sessionId,
    segmentation: { team_cluster: sessionId.split('-').pop() },
    answers,
    other_texts: Object.keys(otherTexts).length > 0 ? otherTexts : undefined,
    started_at: makeTimestamp(1, -2),
    updated_at: makeTimestamp(1),
    completed_at: makeTimestamp(1),
  }
}

function generateContextReadinessResponse(bank, respondentId, sessionId, readinessTarget) {
  const answers = {}

  for (const q of bank.questions) {
    if (q.section === 'readiness') {
      // Pick answer with score closest to target
      answers[q.question_key] = pickClosestAnswer(q.answer_options, readinessTarget)
    } else if (q.section === 'context') {
      // Context: pick any answer
      answers[q.question_key] = pickSingleChoice(q.answer_options)
    }
  }

  return {
    id: respondentId,
    session_id: sessionId,
    segmentation: {},
    answers,
    started_at: makeTimestamp(14, -1),
    updated_at: makeTimestamp(14),
    completed_at: makeTimestamp(14),
  }
}

// ── Session Creation ─────────────────────────────────────────────────────────

function createSession(id, code, type, team, cycle, daysAgo) {
  return {
    id,
    code,
    type,
    team,
    status: 'closed',
    created_at: makeTimestamp(daysAgo),
    updated_at: makeTimestamp(daysAgo - 1),
    cycle,
  }
}

// ── File Writing ─────────────────────────────────────────────────────────────

function writeSession(session) {
  const dir = join(DATA_DIR, 'sessions')
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, `${session.id}.json`), JSON.stringify(session, null, 2))
}

function writeResponse(sessionId, response) {
  const dir = join(DATA_DIR, 'responses', sessionId)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, `${response.id}.json`), JSON.stringify(response, null, 2))
}

function cleanOldDemoData() {
  // Only clean files with demo- prefix — never touch user data
  const sessionsDir = join(DATA_DIR, 'sessions')
  const responsesDir = join(DATA_DIR, 'responses')

  if (existsSync(sessionsDir)) {
    for (const file of readdirSync(sessionsDir)) {
      if (file.startsWith('demo-')) {
        rmSync(join(sessionsDir, file))
      }
    }
  }

  if (existsSync(responsesDir)) {
    for (const dir of readdirSync(responsesDir)) {
      if (dir.startsWith('demo-')) {
        rmSync(join(responsesDir, dir), { recursive: true })
      }
    }
  }
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('🌱 Seeding demo data for "Demo Team Alpha"...\n')

  // Ensure directories exist
  mkdirSync(join(DATA_DIR, 'sessions'), { recursive: true })
  mkdirSync(join(DATA_DIR, 'responses'), { recursive: true })

  // Clean old demo data
  cleanOldDemoData()
  console.log('  Cleaned old demo data (demo-* only)\n')

  // Load question banks
  const pulseCheck = loadYaml('pulse-check.yaml')
  const deepDive = loadYaml('deep-dive-combined.yaml')
  const contextReadiness = loadYaml('context-readiness.yaml')

  const TEAM = 'Demo Team Alpha'
  const RESPONDENT_COUNT = 5
  let sessionCount = 0
  let responseCount = 0

  // ── Zyklus 1 ────────────────────────────────────────────────────────────

  // 1a. Context & Readiness (Zyklus 1)
  {
    const sid = 'demo-alpha-ctx-c1'
    const session = createSession(sid, 'DEMCR1', 'context_readiness', TEAM, 1, 28)
    writeSession(session)
    sessionCount++

    const resp = generateContextReadinessResponse(contextReadiness, 'demo-resp-ctx-1', sid, 55)
    writeResponse(sid, resp)
    responseCount++
    console.log(`  [Zyklus 1] Context & Readiness  → ${sid} (1 Respondent, target ~55%)`)
  }

  // 1b. Pulse Check (Zyklus 1)
  {
    const sid = 'demo-alpha-pulse-c1'
    const session = createSession(sid, 'DEMPC1', 'pulse_check', TEAM, 1, 25)
    writeSession(session)
    sessionCount++

    for (let i = 1; i <= RESPONDENT_COUNT; i++) {
      const resp = generatePulseCheckResponse(pulseCheck, `demo-resp-pc1-${i}`, sid, 2.5)
      writeResponse(sid, resp)
      responseCount++
    }
    console.log(`  [Zyklus 1] Pulse Check          → ${sid} (${RESPONDENT_COUNT} Respondenten, target ~2.5)`)
  }

  // 1c. Deep-Dive (Zyklus 1)
  {
    const sid = 'demo-alpha-deep-c1'
    const session = createSession(sid, 'DEMDD1', 'deep_dive', TEAM, 1, 20)
    writeSession(session)
    sessionCount++

    for (let i = 1; i <= RESPONDENT_COUNT; i++) {
      const resp = generateDeepDiveResponse(deepDive, `demo-resp-dd1-${i}`, sid, 2.5)
      writeResponse(sid, resp)
      responseCount++
    }
    console.log(`  [Zyklus 1] Deep-Dive            → ${sid} (${RESPONDENT_COUNT} Respondenten, target ~2.5)`)
  }

  // ── Zyklus 2 ────────────────────────────────────────────────────────────

  // 2a. Pulse Check (Zyklus 2 — Fortschritt)
  {
    const sid = 'demo-alpha-pulse-c2'
    const session = createSession(sid, 'DEMPC2', 'pulse_check', TEAM, 2, 7)
    writeSession(session)
    sessionCount++

    for (let i = 1; i <= RESPONDENT_COUNT; i++) {
      const resp = generatePulseCheckResponse(pulseCheck, `demo-resp-pc2-${i}`, sid, 3.5)
      writeResponse(sid, resp)
      responseCount++
    }
    console.log(`  [Zyklus 2] Pulse Check          → ${sid} (${RESPONDENT_COUNT} Respondenten, target ~3.5)`)
  }

  // 2b. Deep-Dive (Zyklus 2 — Fortschritt)
  {
    const sid = 'demo-alpha-deep-c2'
    const session = createSession(sid, 'DEMDD2', 'deep_dive', TEAM, 2, 5)
    writeSession(session)
    sessionCount++

    for (let i = 1; i <= RESPONDENT_COUNT; i++) {
      const resp = generateDeepDiveResponse(deepDive, `demo-resp-dd2-${i}`, sid, 3.5)
      writeResponse(sid, resp)
      responseCount++
    }
    console.log(`  [Zyklus 2] Deep-Dive            → ${sid} (${RESPONDENT_COUNT} Respondenten, target ~3.5)`)
  }

  console.log(`\n✅ Done! Created ${sessionCount} sessions with ${responseCount} responses.`)
  console.log(`   Team: "${TEAM}"`)
  console.log(`   Data: ${DATA_DIR}`)
  console.log(`\n   Start server with: npm run dev`)
}

main().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
