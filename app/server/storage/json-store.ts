import { readFile, writeFile, mkdir, readdir, unlink, rm } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { existsSync } from 'node:fs'

// Only allow UUIDs, alphanumeric, and hyphens — no slashes, dots, or special chars
const SAFE_ID_RE = /^[a-zA-Z0-9-]+$/

/** Validate that an ID is safe for use in file paths. Throws on invalid input. */
export function validateId(id: string, label = 'id'): string {
  if (!id || !SAFE_ID_RE.test(id)) {
    throw new Error(`Invalid ${label}: must be alphanumeric/hyphens only`)
  }
  return id
}

export class JsonStore {
  private resolvedBase: string

  constructor(private baseDir: string) {
    this.resolvedBase = resolve(baseDir)
  }

  /** Resolve a path and verify it stays within baseDir. Defence-in-depth. */
  private safePath(...segments: string[]): string {
    const resolved = resolve(join(this.baseDir, ...segments))
    if (!resolved.startsWith(this.resolvedBase + '/') && resolved !== this.resolvedBase) {
      throw new Error('Path traversal detected')
    }
    return resolved
  }

  async init(): Promise<void> {
    await mkdir(join(this.baseDir, 'sessions'), { recursive: true })
    await mkdir(join(this.baseDir, 'responses'), { recursive: true })
  }

  // --- Sessions ---

  private sessionPath(id: string): string {
    validateId(id, 'session id')
    return this.safePath('sessions', `${id}.json`)
  }

  async saveSession(session: Record<string, unknown>): Promise<void> {
    const id = session.id as string
    await writeFile(this.sessionPath(id), JSON.stringify(session, null, 2), 'utf-8')
  }

  async getSession(id: string): Promise<Record<string, unknown> | null> {
    const path = this.sessionPath(id)
    if (!existsSync(path)) return null
    const raw = await readFile(path, 'utf-8')
    return JSON.parse(raw)
  }

  async getAllSessions(): Promise<Record<string, unknown>[]> {
    const dir = join(this.baseDir, 'sessions')
    if (!existsSync(dir)) return []
    const files = await readdir(dir)
    const sessions: Record<string, unknown>[] = []
    for (const file of files) {
      if (!file.endsWith('.json')) continue
      const raw = await readFile(join(dir, file), 'utf-8')
      sessions.push(JSON.parse(raw))
    }
    return sessions
  }

  async findSessionByCode(code: string): Promise<Record<string, unknown> | null> {
    const sessions = await this.getAllSessions()
    return sessions.find((s) => s.code === code) ?? null
  }

  async deleteSession(id: string): Promise<void> {
    const path = this.sessionPath(id)
    if (existsSync(path)) await unlink(path)
    // Also delete all responses for this session
    const respDir = this.responsesDir(id)
    if (existsSync(respDir)) await rm(respDir, { recursive: true })
  }

  // --- Responses ---

  private responsesDir(sessionId: string): string {
    validateId(sessionId, 'session id')
    return this.safePath('responses', sessionId)
  }

  private responsePath(sessionId: string, responseId: string): string {
    validateId(sessionId, 'session id')
    validateId(responseId, 'response id')
    return this.safePath('responses', sessionId, `${responseId}.json`)
  }

  async saveResponse(sessionId: string, response: Record<string, unknown>): Promise<void> {
    await mkdir(this.responsesDir(sessionId), { recursive: true })
    const id = response.id as string
    await writeFile(this.responsePath(sessionId, id), JSON.stringify(response, null, 2), 'utf-8')
  }

  async getResponse(sessionId: string, responseId: string): Promise<Record<string, unknown> | null> {
    const path = this.responsePath(sessionId, responseId)
    if (!existsSync(path)) return null
    const raw = await readFile(path, 'utf-8')
    return JSON.parse(raw)
  }

  async countResponses(sessionId: string): Promise<number> {
    const dir = this.responsesDir(sessionId)
    if (!existsSync(dir)) return 0
    const files = await readdir(dir)
    return files.filter((f) => f.endsWith('.json')).length
  }

  async getAllResponses(sessionId: string): Promise<Record<string, unknown>[]> {
    const dir = this.responsesDir(sessionId)
    if (!existsSync(dir)) return []
    const files = await readdir(dir)
    const responses: Record<string, unknown>[] = []
    for (const file of files) {
      if (!file.endsWith('.json')) continue
      const raw = await readFile(join(dir, file), 'utf-8')
      responses.push(JSON.parse(raw))
    }
    return responses
  }
}
