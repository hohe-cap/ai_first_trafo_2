import { describe, it, expect } from 'vitest'
import { median, maturityLabel, readinessLabel, calculateSessionResults } from '../../src/scoring/engine'
import type { QuestionBank } from '../../src/types/question'
import type { ResponsePayload } from '../../src/types/response'

describe('median', () => {
  it('returns 0 for empty array', () => {
    expect(median([])).toBe(0)
  })

  it('returns the value for single element', () => {
    expect(median([3])).toBe(3)
  })

  it('returns middle for odd count', () => {
    expect(median([1, 3, 5])).toBe(3)
    expect(median([5, 1, 3])).toBe(3) // unsorted input
  })

  it('returns average of middle two for even count', () => {
    expect(median([1, 2, 3, 4])).toBe(2.5)
    expect(median([1, 3, 5, 7])).toBe(4)
  })
})

describe('maturityLabel', () => {
  it('maps integer scores to labels', () => {
    expect(maturityLabel(1)).toBe('Exploring')
    expect(maturityLabel(2)).toBe('Experimenting')
    expect(maturityLabel(3)).toBe('Embedding')
    expect(maturityLabel(4)).toBe('Scaling')
    expect(maturityLabel(5)).toBe('Evolving')
  })

  it('rounds fractional scores', () => {
    expect(maturityLabel(2.4)).toBe('Experimenting')
    expect(maturityLabel(2.5)).toBe('Embedding')
    expect(maturityLabel(3.7)).toBe('Scaling')
  })

  it('clamps out-of-range values', () => {
    expect(maturityLabel(0)).toBe('Exploring')
    expect(maturityLabel(6)).toBe('Evolving')
  })
})

describe('readinessLabel', () => {
  it('returns Ready for >= 70', () => {
    expect(readinessLabel(70)).toBe('Ready')
    expect(readinessLabel(100)).toBe('Ready')
  })

  it('returns Partially Ready for >= 50 and < 70', () => {
    expect(readinessLabel(50)).toBe('Partially Ready')
    expect(readinessLabel(69)).toBe('Partially Ready')
  })

  it('returns Not Ready for < 50', () => {
    expect(readinessLabel(49)).toBe('Not Ready')
    expect(readinessLabel(0)).toBe('Not Ready')
  })
})

// --- Pulse Check Scoring ---

function makePulseCheckBank(): QuestionBank {
  return {
    version: '2.0',
    exploration_type: 'pulse_check',
    description: { de: '', en: '' },
    estimated_duration_minutes: 15,
    dimensions: [
      { key: 'C', name: { de: 'Compliance', en: 'Compliance' }, order: 1 },
      { key: 'R', name: { de: 'Readiness', en: 'Readiness' }, order: 2 },
    ],
    questions: [
      {
        question_key: 'C-M1',
        dimension: 'C',
        question_type: 'maturity',
        question_text: { de: '', en: '' },
        order: 1,
      },
      {
        question_key: 'R-M1',
        dimension: 'R',
        question_type: 'maturity',
        question_text: { de: '', en: '' },
        order: 2,
      },
      {
        question_key: 'C-MC1',
        dimension: 'C',
        question_type: 'diagnostic',
        question_text: { de: '', en: '' },
        answer_type: 'single_choice',
        order: 3,
      },
    ],
  }
}

function makeResponse(id: string, answers: Record<string, number | string | string[]>): ResponsePayload {
  return {
    id,
    session_id: 'test-session',
    segmentation: {},
    answers,
    started_at: '2026-01-01T00:00:00Z',
    updated_at: '2026-01-01T00:00:00Z',
    completed_at: '2026-01-01T00:05:00Z',
  }
}

describe('Pulse Check scoring', () => {
  it('calculates median across 3 respondents', () => {
    const bank = makePulseCheckBank()
    const responses = [
      makeResponse('r1', { 'C-M1': 2, 'R-M1': 4 }),
      makeResponse('r2', { 'C-M1': 4, 'R-M1': 3 }),
      makeResponse('r3', { 'C-M1': 3, 'R-M1': 5 }),
    ]

    const result = calculateSessionResults(bank, responses, 'test-session')

    expect(result.respondent_count).toBe(3)
    expect(result.scores).toHaveLength(2)

    const cScore = result.scores.find((s) => s.dimension === 'C')!
    expect(cScore.score).toBe(3) // median of [2, 3, 4]
    expect(cScore.label).toBe('Embedding')

    const rScore = result.scores.find((s) => s.dimension === 'R')!
    expect(rScore.score).toBe(4) // median of [3, 4, 5]
    expect(rScore.label).toBe('Scaling')
  })

  it('handles even number of respondents', () => {
    const bank = makePulseCheckBank()
    const responses = [
      makeResponse('r1', { 'C-M1': 2 }),
      makeResponse('r2', { 'C-M1': 4 }),
    ]

    const result = calculateSessionResults(bank, responses, 'test-session')
    const cScore = result.scores.find((s) => s.dimension === 'C')!
    expect(cScore.score).toBe(3) // median of [2, 4] = 3
  })

  it('ignores incomplete (non-completed) responses', () => {
    const bank = makePulseCheckBank()
    const responses: ResponsePayload[] = [
      makeResponse('r1', { 'C-M1': 5 }),
      {
        ...makeResponse('r2', { 'C-M1': 1 }),
        completed_at: undefined, // not completed
      },
    ]

    const result = calculateSessionResults(bank, responses, 'test-session')
    expect(result.respondent_count).toBe(1)
    const cScore = result.scores.find((s) => s.dimension === 'C')!
    expect(cScore.score).toBe(5) // only r1 counted
  })

  it('summarizes diagnostic answers', () => {
    const bank = makePulseCheckBank()
    const responses = [
      makeResponse('r1', { 'C-M1': 3, 'C-MC1': 'tool_not_approved' }),
      makeResponse('r2', { 'C-M1': 3, 'C-MC1': 'data_classification' }),
      makeResponse('r3', { 'C-M1': 3, 'C-MC1': 'tool_not_approved' }),
    ]

    const result = calculateSessionResults(bank, responses, 'test-session')
    expect(result.diagnostics).toHaveLength(1)
    const diag = result.diagnostics[0]!
    expect(diag.question_key).toBe('C-MC1')
    expect(diag.total).toBe(3)
    expect(diag.counts['tool_not_approved']).toBe(2)
    expect(diag.counts['data_classification']).toBe(1)
  })
})

// --- Deep-Dive Scoring ---

function makeDeepDiveBank(): QuestionBank {
  return {
    version: '2.0',
    exploration_type: 'deep_dive_adoption',
    dimension: 'A',
    dimension_name: { de: 'Adoption', en: 'Adoption' },
    description: { de: '', en: '' },
    estimated_duration_minutes: 20,
    sub_topics: [
      { key: 'regularity', name: { de: '', en: '' }, description: { de: '', en: '' }, order: 1 },
      { key: 'depth', name: { de: '', en: '' }, description: { de: '', en: '' }, order: 2 },
      { key: 'quality', name: { de: '', en: '' }, description: { de: '', en: '' }, order: 3 },
      { key: 'sharing', name: { de: '', en: '' }, description: { de: '', en: '' }, order: 4 },
    ],
    questions: [
      { question_key: 'A-M-REG', question_type: 'maturity', sub_topic: 'regularity', question_text: { de: '', en: '' }, order: 1 },
      { question_key: 'A-M-DEP', question_type: 'maturity', sub_topic: 'depth', question_text: { de: '', en: '' }, order: 2 },
      { question_key: 'A-M-QUA', question_type: 'maturity', sub_topic: 'quality', question_text: { de: '', en: '' }, order: 3 },
      { question_key: 'A-M-SHA', question_type: 'maturity', sub_topic: 'sharing', question_text: { de: '', en: '' }, order: 4 },
    ],
  }
}

describe('Deep-Dive scoring', () => {
  it('applies min-weighted aggregation (Median×0.6 + Min×0.4)', () => {
    const bank = makeDeepDiveBank()
    // All respondents give same answers → clear sub-topic scores
    const responses = [
      makeResponse('r1', { 'A-M-REG': 4, 'A-M-DEP': 1, 'A-M-QUA': 3, 'A-M-SHA': 5 }),
    ]

    const result = calculateSessionResults(bank, responses, 'test-session')
    expect(result.scores).toHaveLength(1)

    const aScore = result.scores[0]!
    expect(aScore.dimension).toBe('A')

    // Sub-topic scores: [4, 1, 3, 5]
    // Median of [1, 3, 4, 5] = 3.5
    // Min = 1
    // Score = (3.5 × 0.6) + (1 × 0.4) = 2.1 + 0.4 = 2.5
    expect(aScore.score).toBe(2.5)
    expect(aScore.label).toBe('Embedding') // round(2.5) = 3

    expect(aScore.sub_topics).toHaveLength(4)
    expect(aScore.sub_topics!.find((s) => s.sub_topic === 'regularity')!.score).toBe(4)
    expect(aScore.sub_topics!.find((s) => s.sub_topic === 'depth')!.score).toBe(1)
  })

  it('aggregates across multiple respondents per sub-topic', () => {
    const bank = makeDeepDiveBank()
    const responses = [
      makeResponse('r1', { 'A-M-REG': 3, 'A-M-DEP': 2, 'A-M-QUA': 4, 'A-M-SHA': 3 }),
      makeResponse('r2', { 'A-M-REG': 5, 'A-M-DEP': 4, 'A-M-QUA': 4, 'A-M-SHA': 3 }),
      makeResponse('r3', { 'A-M-REG': 4, 'A-M-DEP': 3, 'A-M-QUA': 2, 'A-M-SHA': 5 }),
    ]

    const result = calculateSessionResults(bank, responses, 'test-session')
    const aScore = result.scores[0]!

    // Sub-topic medians:
    // regularity: median([3,5,4]) = 4
    // depth: median([2,4,3]) = 3
    // quality: median([4,4,2]) = 4
    // sharing: median([3,3,5]) = 3
    expect(aScore.sub_topics!.find((s) => s.sub_topic === 'regularity')!.score).toBe(4)
    expect(aScore.sub_topics!.find((s) => s.sub_topic === 'depth')!.score).toBe(3)
    expect(aScore.sub_topics!.find((s) => s.sub_topic === 'quality')!.score).toBe(4)
    expect(aScore.sub_topics!.find((s) => s.sub_topic === 'sharing')!.score).toBe(3)

    // Min-weighted: median([3,3,4,4]) = 3.5, min = 3
    // Score = (3.5 × 0.6) + (3 × 0.4) = 2.1 + 1.2 = 3.3
    expect(aScore.score).toBe(3.3)
    expect(aScore.label).toBe('Embedding') // round(3.3) = 3
  })

  it('returns zero scores for empty responses', () => {
    const bank = makeDeepDiveBank()
    const result = calculateSessionResults(bank, [], 'test-session')
    expect(result.respondent_count).toBe(0)
    expect(result.scores[0]!.score).toBe(0)
  })
})

// --- Combined Deep-Dive Scoring ---

function makeCombinedDeepDiveBank(): QuestionBank {
  return {
    version: '2.0',
    exploration_type: 'deep_dive',
    description: { de: '', en: '' },
    estimated_duration_minutes: 90,
    dimensions: [
      {
        key: 'C',
        name: { de: 'Compliance', en: 'Compliance' },
        order: 1,
        sub_topics: [
          { key: 'policy_clarity', name: { de: '', en: '' }, description: { de: '', en: '' }, order: 1 },
          { key: 'risk_awareness', name: { de: '', en: '' }, description: { de: '', en: '' }, order: 2 },
        ],
      },
      {
        key: 'R',
        name: { de: 'Readiness', en: 'Readiness' },
        order: 2,
        sub_topics: [
          { key: 'skill_confidence', name: { de: '', en: '' }, description: { de: '', en: '' }, order: 1 },
          { key: 'learning_culture', name: { de: '', en: '' }, description: { de: '', en: '' }, order: 2 },
        ],
      },
    ],
    questions: [
      // C dimension maturity questions
      { question_key: 'C-M-POL', dimension: 'C', sub_topic: 'policy_clarity', question_type: 'maturity', question_text: { de: '', en: '' }, order: 1 },
      { question_key: 'C-M-RSK', dimension: 'C', sub_topic: 'risk_awareness', question_type: 'maturity', question_text: { de: '', en: '' }, order: 2 },
      // R dimension maturity questions
      { question_key: 'R-M-SKL', dimension: 'R', sub_topic: 'skill_confidence', question_type: 'maturity', question_text: { de: '', en: '' }, order: 3 },
      { question_key: 'R-M-LRN', dimension: 'R', sub_topic: 'learning_culture', question_type: 'maturity', question_text: { de: '', en: '' }, order: 4 },
      // Diagnostic question
      { question_key: 'C-CTX-1', dimension: 'C', question_type: 'diagnostic', question_text: { de: '', en: '' }, answer_type: 'single_choice' as const, order: 5 },
    ],
  }
}

describe('Combined Deep-Dive scoring', () => {
  it('returns one DimensionScore per dimension', () => {
    const bank = makeCombinedDeepDiveBank()
    const responses = [
      makeResponse('r1', { 'C-M-POL': 3, 'C-M-RSK': 3, 'R-M-SKL': 4, 'R-M-LRN': 4 }),
    ]

    const result = calculateSessionResults(bank, responses, 'test-session')
    expect(result.scores).toHaveLength(2)
    expect(result.scores.map((s) => s.dimension).sort()).toEqual(['C', 'R'])
  })

  it('scores each dimension independently with min-weighted formula', () => {
    const bank = makeCombinedDeepDiveBank()
    const responses = [
      makeResponse('r1', { 'C-M-POL': 4, 'C-M-RSK': 2, 'R-M-SKL': 5, 'R-M-LRN': 3 }),
    ]

    const result = calculateSessionResults(bank, responses, 'test-session')

    // C: sub-topics [4, 2], median=3, min=2 → (3×0.6)+(2×0.4)=1.8+0.8=2.6
    const cScore = result.scores.find((s) => s.dimension === 'C')!
    expect(cScore.score).toBe(2.6)
    expect(cScore.sub_topics).toHaveLength(2)
    expect(cScore.sub_topics!.find((s) => s.sub_topic === 'policy_clarity')!.score).toBe(4)
    expect(cScore.sub_topics!.find((s) => s.sub_topic === 'risk_awareness')!.score).toBe(2)

    // R: sub-topics [5, 3], median=4, min=3 → (4×0.6)+(3×0.4)=2.4+1.2=3.6
    const rScore = result.scores.find((s) => s.dimension === 'R')!
    expect(rScore.score).toBe(3.6)
    expect(rScore.sub_topics).toHaveLength(2)
    expect(rScore.sub_topics!.find((s) => s.sub_topic === 'skill_confidence')!.score).toBe(5)
    expect(rScore.sub_topics!.find((s) => s.sub_topic === 'learning_culture')!.score).toBe(3)
  })

  it('aggregates across multiple respondents', () => {
    const bank = makeCombinedDeepDiveBank()
    const responses = [
      makeResponse('r1', { 'C-M-POL': 3, 'C-M-RSK': 1, 'R-M-SKL': 5, 'R-M-LRN': 4 }),
      makeResponse('r2', { 'C-M-POL': 5, 'C-M-RSK': 3, 'R-M-SKL': 3, 'R-M-LRN': 4 }),
      makeResponse('r3', { 'C-M-POL': 4, 'C-M-RSK': 2, 'R-M-SKL': 4, 'R-M-LRN': 2 }),
    ]

    const result = calculateSessionResults(bank, responses, 'test-session')

    // C: policy_clarity median([3,5,4])=4, risk_awareness median([1,3,2])=2
    //    median([4,2])=3, min=2 → (3×0.6)+(2×0.4)=1.8+0.8=2.6
    const cScore = result.scores.find((s) => s.dimension === 'C')!
    expect(cScore.score).toBe(2.6)

    // R: skill_confidence median([5,3,4])=4, learning_culture median([4,4,2])=4
    //    median([4,4])=4, min=4 → (4×0.6)+(4×0.4)=2.4+1.6=4.0
    const rScore = result.scores.find((s) => s.dimension === 'R')!
    expect(rScore.score).toBe(4)
  })

  it('includes diagnostics from combined bank', () => {
    const bank = makeCombinedDeepDiveBank()
    const responses = [
      makeResponse('r1', { 'C-M-POL': 3, 'C-M-RSK': 3, 'R-M-SKL': 3, 'R-M-LRN': 3, 'C-CTX-1': 'option_a' }),
      makeResponse('r2', { 'C-M-POL': 3, 'C-M-RSK': 3, 'R-M-SKL': 3, 'R-M-LRN': 3, 'C-CTX-1': 'option_b' }),
    ]

    const result = calculateSessionResults(bank, responses, 'test-session')
    expect(result.diagnostics).toHaveLength(1)
    expect(result.diagnostics[0]!.question_key).toBe('C-CTX-1')
    expect(result.diagnostics[0]!.total).toBe(2)
  })
})

// --- Context & Readiness Scoring ---

function makeContextReadinessBank(): QuestionBank {
  return {
    version: '2.0',
    exploration_type: 'context_readiness',
    description: { de: '', en: '' },
    estimated_duration_minutes: 30,
    sections: [
      { key: 'context', name: { de: 'Kontext', en: 'Context' } },
      { key: 'readiness', name: { de: 'Readiness', en: 'Readiness' } },
    ],
    categories: [
      { key: 'project_basics', section: 'context', name: { de: '', en: '' }, order: 1 },
      { key: 'leadership', section: 'readiness', name: { de: 'Leadership', en: 'Leadership' }, weight_in_readiness_score: 0.25, order: 6 },
      { key: 'skills', section: 'readiness', name: { de: 'Skills', en: 'Skills' }, weight_in_readiness_score: 0.20, order: 7 },
    ],
    questions: [
      // Context question (no score — fact capture only)
      {
        question_key: 'ctx_team_size',
        question_type: 'context' as const,
        section: 'context',
        category: 'project_basics',
        question_text: { de: '', en: '' },
        answer_type: 'single_choice' as const,
        answer_options: [
          { key: 'small', de: '', en: '', order: 1 },
          { key: 'large', de: '', en: '', order: 2 },
        ],
        order: 1,
      },
      // Readiness: Leadership q1 (weight 1.5)
      {
        question_key: 'rdy_exec',
        question_type: 'context' as const,
        section: 'readiness',
        category: 'leadership',
        question_text: { de: '', en: '' },
        answer_type: 'single_choice' as const,
        weight: 1.5,
        answer_options: [
          { key: 'full', de: '', en: '', order: 1, score: 100 },
          { key: 'verbal', de: '', en: '', order: 2, score: 60 },
          { key: 'none', de: '', en: '', order: 3, score: 0 },
        ],
        order: 2,
      },
      // Readiness: Leadership q2 (weight 1.0)
      {
        question_key: 'rdy_budget',
        question_type: 'context' as const,
        section: 'readiness',
        category: 'leadership',
        question_text: { de: '', en: '' },
        answer_type: 'single_choice' as const,
        weight: 1.0,
        answer_options: [
          { key: 'high', de: '', en: '', order: 1, score: 100 },
          { key: 'low', de: '', en: '', order: 2, score: 50 },
          { key: 'none', de: '', en: '', order: 3, score: 0 },
        ],
        order: 3,
      },
      // Readiness: Skills q1 (weight 1.2)
      {
        question_key: 'rdy_exposure',
        question_type: 'context' as const,
        section: 'readiness',
        category: 'skills',
        question_text: { de: '', en: '' },
        answer_type: 'single_choice' as const,
        weight: 1.2,
        answer_options: [
          { key: 'high', de: '', en: '', order: 1, score: 100 },
          { key: 'medium', de: '', en: '', order: 2, score: 50 },
          { key: 'low', de: '', en: '', order: 3, score: 20 },
        ],
        order: 4,
      },
    ],
  }
}

describe('Context & Readiness scoring', () => {
  it('scores readiness categories with weighted average', () => {
    const bank = makeContextReadinessBank()
    const responses = [
      makeResponse('r1', {
        ctx_team_size: 'small',
        rdy_exec: 'full',     // score=100, weight=1.5
        rdy_budget: 'low',    // score=50,  weight=1.0
        rdy_exposure: 'high', // score=100, weight=1.2
      }),
    ]

    const result = calculateSessionResults(bank, responses, 'test-session')
    expect(result.session_type).toBe('context_readiness')
    expect(result.respondent_count).toBe(1)

    // Leadership: (100×1.5 + 50×1.0) / (1.5 + 1.0) = 200/2.5 = 80
    const leadership = result.scores.find((s) => s.dimension === 'leadership')!
    expect(leadership.score).toBe(80)
    expect(leadership.label).toBe('Ready')

    // Skills: (100×1.2) / 1.2 = 100
    const skills = result.scores.find((s) => s.dimension === 'skills')!
    expect(skills.score).toBe(100)
    expect(skills.label).toBe('Ready')
  })

  it('uses median across multiple respondents', () => {
    const bank = makeContextReadinessBank()
    const responses = [
      makeResponse('r1', { rdy_exec: 'full', rdy_budget: 'high', rdy_exposure: 'high' }),
      makeResponse('r2', { rdy_exec: 'none', rdy_budget: 'none', rdy_exposure: 'low' }),
      makeResponse('r3', { rdy_exec: 'verbal', rdy_budget: 'low', rdy_exposure: 'medium' }),
    ]

    const result = calculateSessionResults(bank, responses, 'test-session')

    // r1 leadership: (100×1.5 + 100×1.0)/2.5 = 100
    // r2 leadership: (0×1.5 + 0×1.0)/2.5 = 0
    // r3 leadership: (60×1.5 + 50×1.0)/2.5 = 140/2.5 = 56
    // Median of [0, 56, 100] = 56
    const leadership = result.scores.find((s) => s.dimension === 'leadership')!
    expect(leadership.score).toBe(56)
    expect(leadership.label).toBe('Partially Ready')
  })

  it('context questions do not generate scores (only diagnostics)', () => {
    const bank = makeContextReadinessBank()
    const responses = [
      makeResponse('r1', { ctx_team_size: 'large', rdy_exec: 'full', rdy_budget: 'high', rdy_exposure: 'high' }),
    ]

    const result = calculateSessionResults(bank, responses, 'test-session')

    // Only readiness categories have scores
    expect(result.scores.map((s) => s.dimension).sort()).toEqual(['leadership', 'skills'])

    // Context question appears in diagnostics
    const ctxDiag = result.diagnostics.find((d) => d.question_key === 'ctx_team_size')
    expect(ctxDiag).toBeDefined()
    expect(ctxDiag!.counts['large']).toBe(1)
  })

  it('includes all questions in diagnostics', () => {
    const bank = makeContextReadinessBank()
    const responses = [
      makeResponse('r1', { ctx_team_size: 'small', rdy_exec: 'verbal', rdy_budget: 'low', rdy_exposure: 'medium' }),
    ]

    const result = calculateSessionResults(bank, responses, 'test-session')
    // All 4 questions should appear in diagnostics (context + readiness)
    expect(result.diagnostics).toHaveLength(4)
  })
})
