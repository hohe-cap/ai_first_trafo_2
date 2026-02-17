import yaml from 'js-yaml'
import type { QuestionBank } from '../types/question'
import { validateQuestionBank } from './validators'

const YAML_FILES = [
  'pulse-check.yaml',
  'deep-dive-combined.yaml',
  'context-readiness.yaml',
]

const DATA_BASE_PATH = import.meta.env.BASE_URL + 'data/'

export interface LoadResult {
  banks: Map<string, QuestionBank>
  errors: string[]
}

export async function loadAllQuestionBanks(): Promise<LoadResult> {
  const banks = new Map<string, QuestionBank>()
  const errors: string[] = []

  const results = await Promise.allSettled(
    YAML_FILES.map((file) => loadSingleYaml(file))
  )

  for (const [i, result] of results.entries()) {
    const file = YAML_FILES[i]!

    if (result.status === 'fulfilled') {
      const bank = result.value
      const validationErrors = validateQuestionBank(bank, file)
      if (validationErrors.length > 0) {
        errors.push(...validationErrors)
      } else {
        banks.set(bank.exploration_type, bank)
      }
    } else {
      errors.push(`Failed to load ${file}: ${String(result.reason)}`)
    }
  }

  return { banks, errors }
}

async function loadSingleYaml(filename: string): Promise<QuestionBank> {
  const url = DATA_BASE_PATH + filename
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} for ${filename}`)
  }

  const text = await response.text()
  const parsed = yaml.load(text) as QuestionBank

  if (!parsed || typeof parsed !== 'object') {
    throw new Error(`Invalid YAML structure in ${filename}`)
  }

  return parsed
}

export function getAvailableAssessmentTypes(banks: Map<string, QuestionBank>) {
  const types: { key: string; type: 'pulse_check' | 'deep_dive' | 'context_readiness'; dimension?: string; bank: QuestionBank }[] = []

  for (const [key, bank] of banks) {
    if (key === 'pulse_check') {
      types.push({ key, type: 'pulse_check', bank })
    } else if (key === 'deep_dive' || key.startsWith('deep_dive_')) {
      types.push({ key, type: 'deep_dive', dimension: bank.dimension, bank })
    } else if (key === 'context_readiness') {
      types.push({ key, type: 'context_readiness', bank })
    }
  }

  return types
}
