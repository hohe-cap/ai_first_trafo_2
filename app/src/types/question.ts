export type Locale = 'de' | 'en'

export interface LocalizedText {
  de: string
  en: string
}

export interface MaturityLevel {
  label: string
  de: string
  en: string
}

export interface AnswerOption {
  key: string
  de: string
  en: string
  order: number
  usage_mode?: number
  score?: number
}

export type QuestionType = 'maturity' | 'diagnostic' | 'powerful_question' | 'context'
export type AnswerType = 'single_choice' | 'multiple_choice'

export interface Question {
  question_key: string
  dimension?: string
  sub_topic?: string | null
  question_type?: QuestionType
  question_text: LocalizedText
  order: number
  optional?: boolean

  // Context & Readiness fields
  section?: string
  category?: string
  weight?: number

  // Maturity questions
  maturity_levels?: Record<number, MaturityLevel>
  deep_dive_sub_topics?: string[]

  // Diagnostic / Context questions
  answer_type?: AnswerType
  allow_multiple?: boolean
  max_selections?: number
  answer_options?: AnswerOption[]
  description?: LocalizedText

  // Powerful questions
  max_length?: number
  moderation_note?: LocalizedText

  // Context-only
  scoring_note?: string
  why_important?: LocalizedText
}

export interface Section {
  key: string
  name: LocalizedText
  description?: LocalizedText
  estimated_duration_minutes?: number
  purpose?: LocalizedText
}

export interface Category {
  key: string
  section: string
  name: LocalizedText
  description?: LocalizedText
  why_important?: LocalizedText
  weight_in_readiness_score?: number
  order: number
}

export interface Dimension {
  key: string
  name: LocalizedText
  deep_dive?: string
  order: number
  sub_topics?: SubTopic[]
}

export interface SubTopic {
  key: string
  name: LocalizedText
  description: LocalizedText
  order: number
}

export interface SegmentOption {
  key: string
  de: string
  en: string
}

export interface SegmentField {
  key: string
  name: LocalizedText
  description?: LocalizedText
  type: string
  options?: SegmentOption[]
  show_if?: string
}

export interface QuestionBank {
  version: string
  exploration_type: string
  description: LocalizedText
  estimated_duration_minutes: number
  frequency?: string
  respondent?: string
  dimension?: string
  dimension_name?: LocalizedText
  dimensions?: Dimension[]
  sections?: Section[]
  categories?: Category[]
  sub_topics?: SubTopic[]
  segmentation?: {
    required: SegmentField[]
    optional: SegmentField[]
    k_anonymity?: {
      minimum_k: number
    }
  }
  questions: Question[]
  scoring?: Record<string, unknown>
}
