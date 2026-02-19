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

export interface SessionResult {
  session_id: string
  session_type: string
  respondent_count: number
  scores: DimensionScore[]
  diagnostics: DiagnosticSummary[]
  calculated_at: string
}
