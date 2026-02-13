import Fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import fastifyCors from '@fastify/cors'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { JsonStore } from './storage/json-store.js'
import { sessionRoutes } from './routes/sessions.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const DATA_DIR = process.env.DATA_DIR || join(__dirname, '..', 'server-data')
const PORT = Number(process.env.PORT) || 3000
const HOST = process.env.HOST || '0.0.0.0'

async function start() {
  const fastify = Fastify({ logger: true })

  // CORS for dev mode (Vite runs on different port)
  await fastify.register(fastifyCors, {
    origin: true,
  })

  // Initialize storage
  const store = new JsonStore(DATA_DIR)
  await store.init()
  fastify.log.info(`Data directory: ${DATA_DIR}`)

  // API routes
  await fastify.register(sessionRoutes, { store })

  // Serve question bank YAMLs
  const questionBanksDir = join(DATA_DIR, 'question-banks')
  await fastify.register(fastifyStatic, {
    root: questionBanksDir,
    prefix: '/data/',
    decorateReply: false,
  })

  // Serve Vue SPA static files (production only)
  const distDir = join(__dirname, '..', 'dist')
  await fastify.register(fastifyStatic, {
    root: distDir,
    prefix: '/',
    decorateReply: false,
    wildcard: false,
  })

  // SPA fallback: serve index.html for non-API, non-file routes
  fastify.setNotFoundHandler(async (request, reply) => {
    if (request.url.startsWith('/api/')) {
      return reply.status(404).send({ error: 'Not found' })
    }
    return reply.sendFile('index.html', distDir)
  })

  try {
    await fastify.listen({ port: PORT, host: HOST })
    fastify.log.info(`AI Navigator running at http://${HOST}:${PORT}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
