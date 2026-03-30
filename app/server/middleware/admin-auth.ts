import type { FastifyRequest, FastifyReply } from 'fastify'

const ADMIN_SECRET = process.env.ADMIN_SECRET || ''

/**
 * Fastify preHandler hook that requires a valid X-Admin-Key header.
 * If ADMIN_SECRET is empty/unset, all requests pass (dev mode).
 */
export async function requireAdmin(request: FastifyRequest, reply: FastifyReply) {
  if (!ADMIN_SECRET) {
    // No secret configured — allow all (dev mode / standalone)
    return
  }

  const key = request.headers['x-admin-key']
  if (!key || key !== ADMIN_SECRET) {
    return reply.status(401).send({ error: 'Unauthorized — invalid admin key' })
  }
}

/**
 * Returns whether admin protection is enabled (ADMIN_SECRET is set).
 */
export function isAdminProtected(): boolean {
  return ADMIN_SECRET.length > 0
}
