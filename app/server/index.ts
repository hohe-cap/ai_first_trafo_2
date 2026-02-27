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

const __dirname = dirname(fileURLToPath(import.meta.url))

const DATA_DIR = process.env.DATA_DIR || join(__dirname, '..', 'server-data')
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
  fastify.log.info(`Data directory: ${DATA_DIR}`)

  // Health check for load balancers and container orchestration
  fastify.get('/api/health', async () => ({ status: 'ok' }))

  // API routes
  await fastify.register(sessionRoutes, { store })
  await fastify.register(responseRoutes, { store })
  await fastify.register(resultsRoutes, { store, dataDir: DATA_DIR })

  // Serve question bank YAMLs
  const questionBanksDir = join(DATA_DIR, 'question-banks')
  await fastify.register(fastifyStatic, {
    root: questionBanksDir,
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
