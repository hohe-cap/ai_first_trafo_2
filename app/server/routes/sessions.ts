import type { FastifyInstance } from 'fastify'
import { randomUUID } from 'node:crypto'
import type { JsonStore } from '../storage/json-store.js'

function generateCode(): string {
  // 6-char uppercase alphanumeric, easy to read/type
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789' // no 0/O/1/I to avoid confusion
  let code = ''
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)]
  }
  return code
}

interface CreateSessionBody {
  type: 'pulse_check' | string
  team: string
}

export async function sessionRoutes(fastify: FastifyInstance, opts: { store: JsonStore }) {
  const { store } = opts

  // Create a new session
  fastify.post<{ Body: CreateSessionBody }>('/api/sessions', async (request, reply) => {
    const { type, team } = request.body

    if (!type || !team) {
      return reply.status(400).send({ error: 'type and team are required' })
    }

    // Generate unique code (retry if collision)
    let code = generateCode()
    let existing = await store.findSessionByCode(code)
    let attempts = 0
    while (existing && attempts < 10) {
      code = generateCode()
      existing = await store.findSessionByCode(code)
      attempts++
    }

    const session = {
      id: randomUUID(),
      code,
      type,
      team,
      status: 'open' as const,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    await store.saveSession(session)
    return reply.status(201).send(session)
  })

  // List all sessions (facilitator view)
  fastify.get('/api/sessions', async () => {
    return store.getAllSessions()
  })

  // Get session by code (participant entry)
  fastify.get<{ Params: { code: string } }>('/api/sessions/code/:code', async (request, reply) => {
    const session = await store.findSessionByCode(request.params.code.toUpperCase())
    if (!session) {
      return reply.status(404).send({ error: 'Session not found' })
    }
    return session
  })

  // Get session by ID
  fastify.get<{ Params: { id: string } }>('/api/sessions/:id', async (request, reply) => {
    const session = await store.getSession(request.params.id)
    if (!session) {
      return reply.status(404).send({ error: 'Session not found' })
    }
    return session
  })

  // Update session status
  fastify.patch<{ Params: { id: string }; Body: { status: string } }>(
    '/api/sessions/:id/status',
    async (request, reply) => {
      const session = await store.getSession(request.params.id)
      if (!session) {
        return reply.status(404).send({ error: 'Session not found' })
      }

      const { status } = request.body
      if (!['open', 'closed'].includes(status)) {
        return reply.status(400).send({ error: 'status must be "open" or "closed"' })
      }

      session.status = status
      session.updated_at = new Date().toISOString()
      await store.saveSession(session)
      return session
    },
  )

  // Delete session
  fastify.delete<{ Params: { id: string } }>('/api/sessions/:id', async (request, reply) => {
    await store.deleteSession(request.params.id)
    return reply.status(204).send()
  })
}
