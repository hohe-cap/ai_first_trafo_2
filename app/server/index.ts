import Fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import fastifyCors from '@fastify/cors'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { readFile } from 'node:fs/promises'
import { exec } from 'node:child_process'
import { JsonStore } from './storage/json-store.js'
import { sessionRoutes } from './routes/sessions.js'
import { responseRoutes } from './routes/responses.js'
import { resultsRoutes } from './routes/results.js'
import { requireAdmin, isAdminProtected } from './middleware/admin-auth.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const DATA_DIR = process.env.DATA_DIR || join(__dirname, '..', 'server-data')
// QUESTION_BANKS_DIR can be set independently from DATA_DIR.
// This is critical for Azure Container Instances where the file share is mounted
// at DATA_DIR, which would shadow the YAMLs baked into the image.
// Default: DATA_DIR/question-banks (works for docker-compose and local dev).
const QUESTION_BANKS_DIR = process.env.QUESTION_BANKS_DIR || join(DATA_DIR, 'question-banks')
const DIST_DIR = process.env.DIST_DIR || join(__dirname, '..', 'dist')
const PORT = Number(process.env.PORT) || 3000
const HOST = process.env.HOST || '0.0.0.0'

async function start() {
  const fastify = Fastify({ logger: true })

  // CORS — configurable for production, permissive for dev
  const corsOrigin = process.env.CORS_ORIGIN
  await fastify.register(fastifyCors, {
    origin: corsOrigin || true,
  })

  // Initialize storage
  const store = new JsonStore(DATA_DIR)
  await store.init()
  fastify.log.info(`Data directory:          ${DATA_DIR}`)
  fastify.log.info(`Question banks directory: ${QUESTION_BANKS_DIR}`)

  // Health check for load balancers and container orchestration
  fastify.get('/api/health', async () => ({ status: 'ok' }))

  // Admin key verification endpoint
  fastify.get('/api/admin/verify', { preHandler: [requireAdmin] }, async () => ({ ok: true }))

  // Admin protection status (public — tells frontend whether to show login)
  fastify.get('/api/admin/status', async () => ({ protected: isAdminProtected() }))

  // API routes
  await fastify.register(sessionRoutes, { store })
  await fastify.register(responseRoutes, { store })
  await fastify.register(resultsRoutes, { store, questionBanksDir: QUESTION_BANKS_DIR })

  // Debug endpoint — shows actual server paths (admin-protected)
  fastify.get('/api/debug/paths', { preHandler: [requireAdmin] }, async () => ({
    DATA_DIR,
    QUESTION_BANKS_DIR,
    DIST_DIR,
  }))

  // Serve question bank YAMLs
  await fastify.register(fastifyStatic, {
    root: QUESTION_BANKS_DIR,
    prefix: '/data/',
    decorateReply: false,
  })

  // Serve Vue SPA static files (production only)
  await fastify.register(fastifyStatic, {
    root: DIST_DIR,
    prefix: '/',
    decorateReply: false,
    wildcard: false,
  })

  // SPA fallback: serve index.html for non-API, non-file routes
  const indexHtmlPath = join(DIST_DIR, 'index.html')
  fastify.setNotFoundHandler(async (request, reply) => {
    if (request.url.startsWith('/api/')) {
      return reply.status(404).send({ error: 'Not found' })
    }
    const html = await readFile(indexHtmlPath, 'utf-8')
    return reply.type('text/html').send(html)
  })

  try {
    await fastify.listen({ port: PORT, host: HOST })
    const url = `http://localhost:${PORT}`
    fastify.log.info(`CRAFT Explorer running at ${url}`)

    // Auto-open browser in standalone mode
    if (process.env.OPEN_BROWSER === '1') {
      const cmd = process.platform === 'win32' ? `start "" "${url}"`
        : process.platform === 'darwin' ? `open "${url}"`
        : `xdg-open "${url}"`
      exec(cmd, () => {})
    }
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
