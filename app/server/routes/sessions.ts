import type { FastifyInstance } from 'fastify'
import { randomUUID } from 'node:crypto'
import type { JsonStore } from '../storage/json-store.js'
import { requireAdmin } from '../middleware/admin-auth.js'

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
  dimensions?: string[]
  cycle?: number
  context_profile?: 'agile_open' | 'enterprise_regulated' | 'public_sector' | 'corporate_liberal' | 'generic'
}

// Reusable schema for UUID path parameters
const idParamSchema = {
  type: 'object' as const,
  properties: { id: { type: 'string' as const, pattern: '^[a-zA-Z0-9-]+$' } },
  required: ['id'] as const,
}

export async function sessionRoutes(fastify: FastifyInstance, opts: { store: JsonStore }) {
  const { store } = opts

  // Create a new session (admin only)
  fastify.post<{ Body: CreateSessionBody }>('/api/sessions', { preHandler: [requireAdmin] }, async (request, reply) => {
    const { type, team, dimensions, cycle, context_profile } = request.body

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

    const session: Record<string, unknown> = {
      id: randomUUID(),
      code,
      type,
      team,
      status: 'open' as const,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
    if (dimensions && dimensions.length > 0) {
      session.dimensions = dimensions
    }
    if (cycle && cycle > 0) {
      session.cycle = cycle
    }
    if (context_profile && context_profile !== 'generic') {
      session.context_profile = context_profile
    }

    await store.saveSession(session)
    return reply.status(201).send(session)
  })

  // List all sessions (facilitator view, admin only) — enriched with response_count + auto-archive
  fastify.get('/api/sessions', { preHandler: [requireAdmin] }, async () => {
    const sessions = await store.getAllSessions()
    const now = Date.now()
    const thirtyDays = 30 * 24 * 60 * 60 * 1000

    // Auto-archive sessions closed for > 30 days
    for (const s of sessions) {
      if (s.status === 'closed' && s.updated_at) {
        const closedAt = new Date(s.updated_at as string).getTime()
        if (now - closedAt > thirtyDays) {
          s.status = 'archived'
          s.updated_at = new Date().toISOString()
          await store.saveSession(s)
        }
      }
    }

    const enriched = await Promise.all(
      sessions.map(async (s) => ({
        ...s,
        response_count: await store.countResponses(s.id as string),
      })),
    )
    return enriched
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
  fastify.get<{ Params: { id: string } }>('/api/sessions/:id', { schema: { params: idParamSchema } }, async (request, reply) => {
    const session = await store.getSession(request.params.id)
    if (!session) {
      return reply.status(404).send({ error: 'Session not found' })
    }
    return session
  })

  // Update session status (admin only)
  fastify.patch<{ Params: { id: string }; Body: { status: string } }>(
    '/api/sessions/:id/status',
    { schema: { params: idParamSchema }, preHandler: [requireAdmin] },
    async (request, reply) => {
      const session = await store.getSession(request.params.id)
      if (!session) {
        return reply.status(404).send({ error: 'Session not found' })
      }

      const { status } = request.body
      if (!['open', 'closed', 'archived'].includes(status)) {
        return reply.status(400).send({ error: 'status must be "open", "closed", or "archived"' })
      }

      session.status = status
      session.updated_at = new Date().toISOString()
      await store.saveSession(session)
      return session
    },
  )

  // Bulk archive all closed sessions of a team (admin only)
  fastify.post<{ Body: { team: string } }>('/api/sessions/bulk-archive', { preHandler: [requireAdmin] }, async (request, reply) => {
    const { team } = request.body
    if (!team) {
      return reply.status(400).send({ error: 'team is required' })
    }

    const sessions = await store.getAllSessions()
    let count = 0
    for (const s of sessions) {
      if (s.team === team && (s.status === 'open' || s.status === 'closed')) {
        s.status = 'archived'
        s.updated_at = new Date().toISOString()
        await store.saveSession(s)
        count++
      }
    }
    return { archived: count }
  })

  // Delete session and its responses (admin only)
  fastify.delete<{ Params: { id: string } }>('/api/sessions/:id', { schema: { params: idParamSchema }, preHandler: [requireAdmin] }, async (request, reply) => {
    await store.deleteSession(request.params.id)
    return reply.status(204).send()
  })
}
