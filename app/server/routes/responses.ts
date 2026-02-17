import type { FastifyInstance } from 'fastify'
import type { JsonStore } from '../storage/json-store.js'

interface ResponseBody {
  id: string
  session_id: string
  segmentation: Record<string, string>
  answers: Record<string, number | string | string[]>
  started_at: string
  updated_at: string
  completed_at?: string
}

export async function responseRoutes(fastify: FastifyInstance, opts: { store: JsonStore }) {
  const { store } = opts

  // Upsert a response (save or update participant answers)
  fastify.post<{ Params: { id: string }; Body: ResponseBody }>(
    '/api/sessions/:id/responses',
    async (request, reply) => {
      const sessionId = request.params.id

      // Validate session exists
      const session = await store.getSession(sessionId)
      if (!session) {
        return reply.status(404).send({ error: 'Session not found' })
      }

      // Reject if session is closed or archived
      if (session.status === 'closed' || session.status === 'archived') {
        return reply.status(403).send({ error: 'Session is closed' })
      }

      const body = request.body
      if (!body.id) {
        return reply.status(400).send({ error: 'id (respondent_id) is required' })
      }

      const response = {
        ...body,
        session_id: sessionId,
        updated_at: new Date().toISOString(),
      }

      await store.saveResponse(sessionId, response)
      return reply.status(200).send(response)
    },
  )

  // Get a single response by respondent ID (for resume)
  fastify.get<{ Params: { id: string; respondentId: string } }>(
    '/api/sessions/:id/responses/:respondentId',
    async (request, reply) => {
      const response = await store.getResponse(request.params.id, request.params.respondentId)
      if (!response) {
        return reply.status(404).send({ error: 'Response not found' })
      }
      return response
    },
  )

  // Get all responses for a session (for scoring/dashboard)
  fastify.get<{ Params: { id: string } }>(
    '/api/sessions/:id/responses',
    async (request) => {
      return store.getAllResponses(request.params.id)
    },
  )
}
