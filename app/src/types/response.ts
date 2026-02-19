export type AnswerValue = number | string | string[]

export type FlowPhase = 'loading' | 'error' | 'segmentation' | 'questions' | 'submitting'

export interface ResponsePayload {
  id: string
  session_id: string
  segmentation: Record<string, string>
  answers: Record<string, AnswerValue>
  other_texts?: Record<string, string>
  started_at: string
  updated_at: string
  completed_at?: string
}
