import type { FastifyInstance } from 'fastify'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import yaml from 'js-yaml'
import type { JsonStore } from '../storage/json-store.js'
import type { QuestionBank } from '../../src/types/question.js'
import type { ResponsePayload } from '../../src/types/response.js'
import { calculateSessionResults } from '../../src/scoring/engine.js'

// Map session type to YAML filename
const TYPE_TO_FILE: Record<string, string> = {
  pulse_check: 'pulse-check.yaml',
  deep_dive: 'deep-dive-combined.yaml',
  context_readiness: 'context-readiness.yaml',
  // Legacy single-dimension deep-dives
  deep_dive_adoption: 'deep-dive-adoption.yaml',
  deep_dive_compliance: 'deep-dive-compliance.yaml',
  deep_dive_flow: 'deep-dive-flow.yaml',
  deep_dive_readiness: 'deep-dive-readiness.yaml',
  deep_dive_technical: 'deep-dive-technical.yaml',
}

export async function resultsRoutes(
  fastify: FastifyInstance,
  opts: { store: JsonStore; dataDir: string },
) {
  const { store, dataDir } = opts

  fastify.get<{ Params: { id: string } }>(
    '/api/sessions/:id/results',
    async (request, reply) => {
      const sessionId = request.params.id

      // Load session
      const session = await store.getSession(sessionId)
      if (!session) {
        return reply.status(404).send({ error: 'Session not found' })
      }

      // Load question bank YAML
      const sessionType = session.type as string
      const yamlFile = TYPE_TO_FILE[sessionType]
      if (!yamlFile) {
        return reply.status(400).send({ error: `Unknown session type: ${sessionType}` })
      }

      const yamlPath = join(dataDir, 'question-banks', yamlFile)
      let bank: QuestionBank
      try {
        const raw = await readFile(yamlPath, 'utf-8')
        bank = yaml.load(raw) as QuestionBank
      } catch {
        return reply.status(500).send({ error: 'Failed to load question bank' })
      }

      // Filter by selected dimensions if session has dimension restriction
      const dims = (session as Record<string, unknown>).dimensions as string[] | undefined
      if (dims && dims.length > 0) {
        bank.questions = bank.questions.filter((q) => !q.dimension || dims.includes(q.dimension))
        if (bank.dimensions) {
          bank.dimensions = bank.dimensions.filter((d) => dims.includes(d.key))
        }
      }

      // Load all responses
      const responses = (await store.getAllResponses(sessionId)) as unknown as ResponsePayload[]

      // Calculate results
      const results = calculateSessionResults(bank, responses, sessionId)

      return results
    },
  )
}
