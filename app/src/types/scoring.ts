export interface DimensionScore {
  dimension: string
  score: number
  label: string
}

export interface AssessmentResult {
  assessment_id: string
  scores: DimensionScore[]
  overall_score?: number
  calculated_at: string
}
