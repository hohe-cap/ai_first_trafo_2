import type { QuestionBank, Question, SubTopic, Category } from '../types/question'
import type { ResponsePayload } from '../types/response'
import type { DimensionScore, SubTopicScore, DiagnosticSummary, SessionResult } from '../types/scoring'

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
    }

    return {
      question_key: q.question_key,
      dimension: q.dimension,
      counts,
      total,
    }
  })
}

/**
 * Calculate full session results.
 */
export function calculateSessionResults(
  bank: QuestionBank,
  responses: ResponsePayload[],
  sessionId: string,
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

  return {
    session_id: sessionId,
    session_type: bank.exploration_type,
    respondent_count: completedResponses.length,
    scores,
    diagnostics,
    calculated_at: new Date().toISOString(),
  }
}
