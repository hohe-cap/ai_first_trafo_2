import { describe, it, expect } from 'vitest'
import { validateQuestionBank } from '../../src/loader/validators'

describe('validateQuestionBank', () => {
  it('returns errors for null input', () => {
    const errors = validateQuestionBank(null, 'test.yaml')
    expect(errors).toHaveLength(1)
    expect(errors[0]).toContain('Not a valid object')
  })

  it('returns errors for missing required fields', () => {
    const errors = validateQuestionBank({}, 'test.yaml')
    expect(errors.length).toBeGreaterThanOrEqual(3)
    expect(errors.some((e) => e.includes("'version'"))).toBe(true)
    expect(errors.some((e) => e.includes("'exploration_type'"))).toBe(true)
    expect(errors.some((e) => e.includes("'questions'"))).toBe(true)
  })

  it('validates question structure', () => {
    const bank = {
      version: '2.0',
      exploration_type: 'pulse_check',
      questions: [
        { question_key: 'Q1', question_type: 'maturity', question_text: { de: 'Frage', en: 'Question' } },
        { question_type: 'diagnostic', question_text: { de: 'Frage' } },
      ],
    }
    const errors = validateQuestionBank(bank, 'test.yaml')
    expect(errors.some((e) => e.includes('missing') && e.includes('question_key'))).toBe(true)
    expect(errors.some((e) => e.includes("'de' and 'en'"))).toBe(true)
  })

  it('returns no errors for a valid minimal bank', () => {
    const bank = {
      version: '2.0',
      exploration_type: 'pulse_check',
      questions: [
        { question_key: 'Q1', question_type: 'maturity', question_text: { de: 'Frage', en: 'Question' } },
      ],
    }
    const errors = validateQuestionBank(bank, 'test.yaml')
    expect(errors).toHaveLength(0)
  })
})
