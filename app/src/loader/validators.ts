export function validateQuestionBank(bank: unknown, filename: string): string[] {
  const errors: string[] = []
  const prefix = `[${filename}]`

  if (!bank || typeof bank !== 'object') {
    return [`${prefix} Not a valid object`]
  }

  const b = bank as Record<string, unknown>

  if (!b.version) {
    errors.push(`${prefix} Missing 'version'`)
  }

  if (!b.exploration_type || typeof b.exploration_type !== 'string') {
    errors.push(`${prefix} Missing or invalid 'exploration_type'`)
  }

  if (!b.questions || !Array.isArray(b.questions)) {
    errors.push(`${prefix} Missing or invalid 'questions' array`)
  } else {
    for (let i = 0; i < b.questions.length; i++) {
      const q = b.questions[i] as Record<string, unknown>
      if (!q.question_key) {
        errors.push(`${prefix} Question ${i}: missing 'question_key'`)
      }
      if (!q.question_type && !q.section) {
        errors.push(`${prefix} Question ${i}: missing 'question_type' or 'section'`)
      }
      if (!q.question_text || typeof q.question_text !== 'object') {
        errors.push(`${prefix} Question ${i}: missing or invalid 'question_text'`)
      } else {
        const qt = q.question_text as Record<string, unknown>
        if (!qt.de || !qt.en) {
          errors.push(`${prefix} Question ${i} (${q.question_key}): question_text must have 'de' and 'en'`)
        }
      }
    }
  }

  return errors
}
