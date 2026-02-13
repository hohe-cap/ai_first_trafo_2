import type { Locale } from './question'

export interface SegmentationData {
  team_cluster?: string
  role_family?: string
  work_context?: string
  seniority?: string
}

export interface AssessmentAnswer {
  question_key: string
  value: number | string | string[]
  answered_at: string
}

export type AssessmentType = 'pulse_check' | 'deep_dive'

export interface AssessmentMeta {
  id: string
  type: AssessmentType
  deep_dive_dimension?: string
  language: Locale
  created_at: string
  updated_at: string
  completed_at?: string
  segmentation: SegmentationData
}

export interface Assessment {
  meta: AssessmentMeta
  answers: Record<string, AssessmentAnswer>
  current_question_index: number
}
