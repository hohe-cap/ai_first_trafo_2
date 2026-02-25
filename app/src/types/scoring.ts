export interface SubTopicScore {
  sub_topic: string
  score: number
  label: string
}

export interface DimensionScore {
  dimension: string
  score: number
  label: string
  sub_topics?: SubTopicScore[]
}

export interface DiagnosticSummary {
  question_key: string
  dimension?: string
  counts: Record<string, number>
  total: number
  other_texts?: string[]
}

export interface ChallengeNarrative {
  challenge_id: string
  dimension: string
  title: string
  relevance: 'very_high' | 'high' | 'medium' | 'low'
  signals: string[]
  description: string
}

export interface CrossValidation {
  pattern: string
  dimensions: string[]
  description: string
  severity: 'info' | 'warning' | 'critical'
}

export interface SessionResult {
  session_id: string
  session_type: string
  context_profile?: string
  respondent_count: number
  scores: DimensionScore[]
  diagnostics: DiagnosticSummary[]
  challenges?: ChallengeNarrative[]
  cross_validations?: CrossValidation[]
  calculated_at: string
}
