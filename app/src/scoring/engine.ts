import type { QuestionBank, Question, SubTopic, Category } from '../types/question'
import type { ResponsePayload } from '../types/response'
import type {
  DimensionScore,
  SubTopicScore,
  DiagnosticSummary,
  SessionResult,
  ChallengeNarrative,
  CrossValidation,
} from '../types/scoring'

const MATURITY_LABELS: Record<number, string> = {
  1: 'Exploring',
  2: 'Experimenting',
  3: 'Embedding',
  4: 'Scaling',
  5: 'Evolving',
}

/** Get maturity label for a numeric score (rounds to nearest integer) */
export function maturityLabel(score: number): string {
  const rounded = Math.round(Math.max(1, Math.min(5, score)))
  return MATURITY_LABELS[rounded] ?? 'Unknown'
}

/** Calculate median of a number array. Returns 0 for empty arrays. */
export function median(values: number[]): number {
  if (values.length === 0) return 0
  const sorted = [...values].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1]! + sorted[mid]!) / 2
  }
  return sorted[mid]!
}

/**
 * Score a Pulse Check session.
 * One maturity question per dimension → median across respondents.
 */
function scorePulseCheck(
  bank: QuestionBank,
  responses: ResponsePayload[],
): DimensionScore[] {
  const maturityQuestions = bank.questions.filter((q) => q.question_type === 'maturity')
  const dimensions = bank.dimensions ?? []

  return dimensions.map((dim) => {
    // Find the maturity question for this dimension
    const question = maturityQuestions.find((q) => q.dimension === dim.key)
    if (!question) {
      return { dimension: dim.key, score: 0, label: 'N/A' }
    }

    // Collect all respondent answers for this question
    const values = responses
      .map((r) => r.answers[question.question_key])
      .filter((v): v is number => typeof v === 'number' && v >= 1 && v <= 5)

    const score = median(values)
    return {
      dimension: dim.key,
      score: Math.round(score * 10) / 10,
      label: maturityLabel(score),
    }
  })
}

/**
 * Score a single dimension from its sub-topics.
 * Formula: (Median of sub-topic scores × 0.6) + (Min × 0.4)
 */
function scoreSingleDimension(
  dimensionKey: string,
  subTopics: SubTopic[],
  maturityQuestions: Question[],
  responses: ResponsePayload[],
): DimensionScore {
  const subTopicScores: SubTopicScore[] = subTopics.map((st) => {
    const questions = maturityQuestions.filter((q) => q.sub_topic === st.key)

    const questionMedians = questions.map((q) => {
      const values = responses
        .map((r) => r.answers[q.question_key])
        .filter((v): v is number => typeof v === 'number' && v >= 1 && v <= 5)
      return median(values)
    }).filter((v) => v > 0)

    const score = median(questionMedians)
    return {
      sub_topic: st.key,
      score: Math.round(score * 10) / 10,
      label: maturityLabel(score),
    }
  })

  const stValues = subTopicScores.map((s) => s.score).filter((v) => v > 0)
  const dimMedian = median(stValues)
  const dimMin = stValues.length > 0 ? Math.min(...stValues) : 0
  const dimScore = stValues.length > 0
    ? (dimMedian * 0.6) + (dimMin * 0.4)
    : 0

  return {
    dimension: dimensionKey,
    score: Math.round(dimScore * 10) / 10,
    label: maturityLabel(dimScore),
    sub_topics: subTopicScores,
  }
}

/**
 * Score a Deep-Dive session.
 * Supports both single-dimension (legacy) and combined (multi-dimension) banks.
 */
function scoreDeepDive(
  bank: QuestionBank,
  responses: ResponsePayload[],
): DimensionScore[] {
  const maturityQuestions = bank.questions.filter((q) => q.question_type === 'maturity')

  // Combined deep-dive: dimensions with nested sub_topics
  const dimensionsWithSubTopics = (bank.dimensions ?? []).filter(
    (d) => d.sub_topics && d.sub_topics.length > 0,
  )

  if (dimensionsWithSubTopics.length > 0) {
    return dimensionsWithSubTopics.map((dim) =>
      scoreSingleDimension(dim.key, dim.sub_topics!, maturityQuestions, responses),
    )
  }

  // Legacy single-dimension deep-dive: top-level sub_topics
  const subTopics = bank.sub_topics ?? []
  return [
    scoreSingleDimension(
      bank.dimension ?? bank.exploration_type,
      subTopics,
      maturityQuestions,
      responses,
    ),
  ]
}

/** Get readiness label for a 0-100 score */
export function readinessLabel(score: number): string {
  if (score >= 70) return 'Ready'
  if (score >= 50) return 'Partially Ready'
  return 'Not Ready'
}

/**
 * Score a Context & Readiness session.
 * Only readiness questions (section=readiness) produce scores.
 * Each readiness answer_option has a score (0-100), each question has a weight.
 * Per category: weighted average = Σ(score × weight) / Σ(weight)
 */
function scoreContextReadiness(
  bank: QuestionBank,
  responses: ResponsePayload[],
): DimensionScore[] {
  const readinessQuestions = bank.questions.filter((q) => q.section === 'readiness')
  const readinessCategories = (bank.categories ?? []).filter((c) => c.section === 'readiness')

  return readinessCategories.map((cat: Category) => {
    const catQuestions = readinessQuestions.filter((q) => q.category === cat.key)

    // For each respondent, compute weighted score for this category
    const respondentScores: number[] = []

    for (const r of responses) {
      let weightedSum = 0
      let totalWeight = 0

      for (const q of catQuestions) {
        const answer = r.answers[q.question_key]
        if (typeof answer !== 'string') continue

        const option = q.answer_options?.find((o) => o.key === answer)
        if (option?.score == null) continue

        const w = q.weight ?? 1
        weightedSum += option.score * w
        totalWeight += w
      }

      if (totalWeight > 0) {
        respondentScores.push(weightedSum / totalWeight)
      }
    }

    // Median across respondents
    const score = median(respondentScores)
    return {
      dimension: cat.key,
      score: Math.round(score * 10) / 10,
      label: readinessLabel(score),
    }
  })
}

/**
 * Summarize diagnostic (MC) answers across respondents.
 * Returns count of each answer option per question.
 */
function summarizeDiagnostics(
  bank: QuestionBank,
  responses: ResponsePayload[],
): DiagnosticSummary[] {
  const diagnosticQuestions = bank.questions.filter(
    (q) => q.question_type === 'diagnostic' || q.question_type === 'context' || q.section,
  )

  return diagnosticQuestions.map((q) => {
    const counts: Record<string, number> = {}
    const collectedTexts: string[] = []
    let total = 0

    for (const r of responses) {
      const answer = r.answers[q.question_key]
      if (!answer) continue
      total++

      const keys = Array.isArray(answer) ? answer : [answer]
      for (const key of keys) {
        if (typeof key === 'string') {
          counts[key] = (counts[key] ?? 0) + 1
        }
      }

      // Collect "other" free text
      const txt = r.other_texts?.[q.question_key]
      if (txt) collectedTexts.push(txt)
    }

    return {
      question_key: q.question_key,
      dimension: q.dimension,
      counts,
      total,
      other_texts: collectedTexts.length > 0 ? collectedTexts : undefined,
    }
  })
}

// ---------------------------------------------------------------------------
// Challenge detection based on scores and diagnostics
// ---------------------------------------------------------------------------

// Profile relevance: 3 = very high, 2 = high, 1 = medium, 0 = low/rare
type ProfileRelevance = Record<string, Record<string, number>>

const PROFILE_RELEVANCE: ProfileRelevance = {
  'C-H1': { agile_open: 3, enterprise_regulated: 1, public_sector: 1, corporate_liberal: 2 },
  'C-H2': { agile_open: 0, enterprise_regulated: 3, public_sector: 3, corporate_liberal: 2 },
  'C-H5': { agile_open: 0, enterprise_regulated: 3, public_sector: 3, corporate_liberal: 2 },
  'R-H1': { agile_open: 0, enterprise_regulated: 2, public_sector: 3, corporate_liberal: 1 },
  'R-H2': { agile_open: 1, enterprise_regulated: 2, public_sector: 3, corporate_liberal: 2 },
  'R-H4': { agile_open: 0, enterprise_regulated: 3, public_sector: 3, corporate_liberal: 2 },
  'A-H1': { agile_open: 2, enterprise_regulated: 3, public_sector: 3, corporate_liberal: 2 },
  'A-H4': { agile_open: 3, enterprise_regulated: 2, public_sector: 1, corporate_liberal: 3 },
  'F-H1': { agile_open: 2, enterprise_regulated: 3, public_sector: 3, corporate_liberal: 2 },
  'F-H2': { agile_open: 2, enterprise_regulated: 2, public_sector: 3, corporate_liberal: 2 },
  'T-H1': { agile_open: 0, enterprise_regulated: 2, public_sector: 3, corporate_liberal: 1 },
}

interface ChallengeDefinition {
  id: string
  dimension: string
  title: string
  description: string
  detect: (scores: DimensionScore[], diagnostics: DiagnosticSummary[]) => string[]
}

const CHALLENGE_DEFINITIONS: ChallengeDefinition[] = [
  {
    id: 'C-H1',
    dimension: 'C',
    title: 'Policy-Vakuum',
    description: 'Keine oder unklare AI-Policies — Teams wissen nicht, was erlaubt ist.',
    detect: (scores, diagnostics) => {
      const signals: string[] = []
      const cScore = scores.find((s) => s.dimension === 'C')
      if (cScore && cScore.score <= 2) signals.push(`C-Score niedrig (${cScore.score})`)
      const cmc = diagnostics.find((d) => d.question_key === 'C-MC1' || d.question_key === 'C-MC-BLOCKER')
      if (cmc && (cmc.counts['tool_not_approved'] || cmc.counts['no_policy'])) {
        signals.push('Diagnostik: Tool nicht freigegeben / keine Policy')
      }
      return signals
    },
  },
  {
    id: 'C-H5',
    dimension: 'C',
    title: 'Compliance-Angst-Paralyse',
    description: 'Compliance ist hoch, aber Adoption ist niedrig — Angst vor Regelverletzung hemmt die Nutzung.',
    detect: (scores) => {
      const signals: string[] = []
      const cScore = scores.find((s) => s.dimension === 'C')
      const aScore = scores.find((s) => s.dimension === 'A')
      if (cScore && aScore && cScore.score >= 3 && aScore.score <= 2) {
        signals.push(`C hoch (${cScore.score}) aber A niedrig (${aScore.score}) — Angst-Paralyse-Pattern`)
      }
      return signals
    },
  },
  {
    id: 'R-H1',
    dimension: 'R',
    title: 'Existenzangst',
    description: 'Sorge um Arbeitsplatz oder Rolle blockiert die AI-Adoption.',
    detect: (_scores, diagnostics) => {
      const signals: string[] = []
      const rmc = diagnostics.find((d) => d.question_key === 'R-MC2' || d.question_key === 'R-MC-BLOCKER')
      if (rmc && rmc.counts['role_concern'] && rmc.total > 0) {
        const pct = Math.round((rmc.counts['role_concern'] / rmc.total) * 100)
        if (pct >= 20) signals.push(`${pct}% nennen Rollenbedenken als Blocker`)
      }
      return signals
    },
  },
  {
    id: 'R-H2',
    dimension: 'R',
    title: 'Skill-Gap / Paralyse',
    description: 'Team weiss nicht, wie AI effektiv genutzt wird — fehlende Skills blockieren.',
    detect: (_scores, diagnostics) => {
      const signals: string[] = []
      const rmc = diagnostics.find((d) => d.question_key === 'R-MC2' || d.question_key === 'R-MC-BLOCKER')
      if (rmc && rmc.counts['missing_skills'] && rmc.total > 0) {
        const pct = Math.round((rmc.counts['missing_skills'] / rmc.total) * 100)
        if (pct >= 25) signals.push(`${pct}% nennen fehlende Skills als Blocker`)
      }
      return signals
    },
  },
  {
    id: 'R-H4',
    dimension: 'R',
    title: 'Manager als unsichtbare Bremse',
    description: 'Keine Zeit zum Lernen / Experimentieren — Management priorisiert AI-Enablement nicht.',
    detect: (_scores, diagnostics) => {
      const signals: string[] = []
      const rmc = diagnostics.find((d) => d.question_key === 'R-MC2' || d.question_key === 'R-MC-BLOCKER')
      if (rmc && rmc.counts['no_time'] && rmc.total > 0) {
        const pct = Math.round((rmc.counts['no_time'] / rmc.total) * 100)
        if (pct >= 25) signals.push(`${pct}% nennen fehlende Zeit als Blocker`)
      }
      return signals
    },
  },
  {
    id: 'A-H1',
    dimension: 'A',
    title: 'Chat-Only-Plateau',
    description: 'AI wird nur als Chat genutzt — keine IDE-Integration, keine tiefere Workflow-Einbettung.',
    detect: (_scores, diagnostics) => {
      const signals: string[] = []
      const amc = diagnostics.find((d) => d.question_key === 'A-MC1')
      if (amc && amc.counts['chat'] && amc.total > 0) {
        const pct = Math.round((amc.counts['chat'] / amc.total) * 100)
        if (pct >= 40) signals.push(`${pct}% nutzen nur Chat-Modus`)
      }
      return signals
    },
  },
  {
    id: 'A-H4',
    dimension: 'A',
    title: 'Shadow AI dominiert',
    description: 'Nicht-freigegebene Tools werden häufig genutzt — Risiko und Kontrollverlust.',
    detect: (_scores, diagnostics) => {
      const signals: string[] = []
      const amc = diagnostics.find((d) => d.question_key === 'A-MC3' || d.question_key === 'R-CTX-2')
      if (amc && amc.total > 0) {
        const freq = (amc.counts['frequently'] ?? 0) + (amc.counts['regularly'] ?? 0)
        const pct = Math.round((freq / amc.total) * 100)
        if (pct >= 20) signals.push(`${pct}% nutzen Shadow AI häufig/regelmäßig`)
      }
      return signals
    },
  },
  {
    id: 'F-H1',
    dimension: 'F',
    title: 'AI als Insellösung',
    description: 'Adoption ist hoch, aber AI ist nicht in Prozesse integriert — Insellösung ohne Hebelwirkung.',
    detect: (scores) => {
      const signals: string[] = []
      const aScore = scores.find((s) => s.dimension === 'A')
      const fScore = scores.find((s) => s.dimension === 'F')
      if (aScore && fScore && aScore.score >= 3 && fScore.score <= 2) {
        signals.push(`A hoch (${aScore.score}) aber F niedrig (${fScore.score}) — Insellösung-Pattern`)
      }
      return signals
    },
  },
  {
    id: 'T-H1',
    dimension: 'T',
    title: 'Tool-Wüste',
    description: 'Keine offiziell freigegebenen AI-Tools verfügbar — technische Grundlage fehlt.',
    detect: (scores, diagnostics) => {
      const signals: string[] = []
      const tScore = scores.find((s) => s.dimension === 'T')
      if (tScore && tScore.score <= 1.5) signals.push(`T-Score sehr niedrig (${tScore.score})`)
      const tmc = diagnostics.find((d) => d.question_key === 'T-MC2' || d.question_key === 'T-MC-BLOCKER')
      if (tmc && tmc.counts['no_access'] && tmc.total > 0) {
        const pct = Math.round((tmc.counts['no_access'] / tmc.total) * 100)
        if (pct >= 25) signals.push(`${pct}% haben keinen Tool-Zugang`)
      }
      return signals
    },
  },
]

function detectChallenges(
  scores: DimensionScore[],
  diagnostics: DiagnosticSummary[],
  contextProfile?: string,
): ChallengeNarrative[] {
  const challenges: ChallengeNarrative[] = []

  for (const def of CHALLENGE_DEFINITIONS) {
    const signals = def.detect(scores, diagnostics)
    if (signals.length === 0) continue

    // Determine relevance based on profile
    let relevance: ChallengeNarrative['relevance'] = 'medium'
    if (contextProfile && PROFILE_RELEVANCE[def.id]?.[contextProfile] !== undefined) {
      const r = PROFILE_RELEVANCE[def.id]![contextProfile]!
      if (r >= 3) relevance = 'very_high'
      else if (r >= 2) relevance = 'high'
      else if (r >= 1) relevance = 'medium'
      else relevance = 'low'
    }

    challenges.push({
      challenge_id: def.id,
      dimension: def.dimension,
      title: def.title,
      relevance,
      signals,
      description: def.description,
    })
  }

  // Sort: very_high first, then high, then medium, then low
  const order = { very_high: 0, high: 1, medium: 2, low: 3 }
  challenges.sort((a, b) => order[a.relevance] - order[b.relevance])

  return challenges
}

// ---------------------------------------------------------------------------
// Cross-validation: detect inconsistencies between dimensions/answers
// ---------------------------------------------------------------------------

function detectCrossValidations(
  scores: DimensionScore[],
  diagnostics: DiagnosticSummary[],
): CrossValidation[] {
  const validations: CrossValidation[] = []

  // Pattern: High T but low A — tools available but not used
  const tScore = scores.find((s) => s.dimension === 'T')
  const aScore = scores.find((s) => s.dimension === 'A')
  if (tScore && aScore && tScore.score >= 3.5 && aScore.score <= 2) {
    validations.push({
      pattern: 'Tools vorhanden, aber nicht genutzt',
      dimensions: ['T', 'A'],
      description: `Technical Enablement ist stark (${tScore.score}), aber Adoption bleibt niedrig (${aScore.score}). Hinweis auf fehlenden Change-Prozess oder mangelnde Relevanz der bereitgestellten Tools.`,
      severity: 'warning',
    })
  }

  // Pattern: High R but low A — team is ready but not using
  const rScore = scores.find((s) => s.dimension === 'R')
  if (rScore && aScore && rScore.score >= 3.5 && aScore.score <= 2) {
    validations.push({
      pattern: 'Team bereit, aber AI nicht genutzt',
      dimensions: ['R', 'A'],
      description: `Readiness ist hoch (${rScore.score}), aber Adoption bleibt niedrig (${aScore.score}). Mögliche Ursache: fehlende Tools (T prüfen), Prozess-Hürden (F prüfen), oder Governance-Blocker (C prüfen).`,
      severity: 'warning',
    })
  }

  // Pattern: High A but low C — adoption without governance
  const cScore = scores.find((s) => s.dimension === 'C')
  if (aScore && cScore && aScore.score >= 3 && cScore.score <= 2) {
    validations.push({
      pattern: 'Adoption ohne Governance',
      dimensions: ['A', 'C'],
      description: `Adoption ist hoch (${aScore.score}), aber Compliance niedrig (${cScore.score}). Risiko unkontrollierter Nutzung und Datenschutz-Probleme. Shadow AI prüfen.`,
      severity: 'critical',
    })
  }

  // Pattern: Shadow AI high + tool availability low
  const shadowAI = diagnostics.find((d) => d.question_key === 'A-MC3' || d.question_key === 'R-CTX-2')
  if (shadowAI && shadowAI.total > 0) {
    const freq = (shadowAI.counts['frequently'] ?? 0) + (shadowAI.counts['regularly'] ?? 0)
    if (freq / shadowAI.total >= 0.3 && tScore && tScore.score <= 2.5) {
      validations.push({
        pattern: 'Shadow AI kompensiert Tool-Mangel',
        dimensions: ['A', 'T'],
        description: `${Math.round((freq / shadowAI.total) * 100)}% nutzen Shadow AI häufig, während offizielle Tools schwach sind (T: ${tScore.score}). Teams kompensieren Tool-Mangel durch nicht-freigegebene Tools.`,
        severity: 'critical',
      })
    }
  }

  return validations
}

/**
 * Calculate full session results.
 */
export function calculateSessionResults(
  bank: QuestionBank,
  responses: ResponsePayload[],
  sessionId: string,
  contextProfile?: string,
): SessionResult {
  const completedResponses = responses.filter((r) => r.completed_at)

  let scores: DimensionScore[]
  if (bank.exploration_type === 'context_readiness') {
    scores = scoreContextReadiness(bank, completedResponses)
  } else if (bank.exploration_type === 'pulse_check') {
    scores = scorePulseCheck(bank, completedResponses)
  } else {
    scores = scoreDeepDive(bank, completedResponses)
  }

  const diagnostics = summarizeDiagnostics(bank, completedResponses)

  // Challenge detection and cross-validation (only for pulse_check and deep_dive)
  const isMaturityBased = bank.exploration_type !== 'context_readiness'
  const challenges = isMaturityBased ? detectChallenges(scores, diagnostics, contextProfile) : undefined
  const crossValidations = isMaturityBased ? detectCrossValidations(scores, diagnostics) : undefined

  return {
    session_id: sessionId,
    session_type: bank.exploration_type,
    context_profile: contextProfile,
    respondent_count: completedResponses.length,
    scores,
    diagnostics,
    challenges: challenges && challenges.length > 0 ? challenges : undefined,
    cross_validations: crossValidations && crossValidations.length > 0 ? crossValidations : undefined,
    calculated_at: new Date().toISOString(),
  }
}
