import { readFile, writeFile, mkdir, readdir, unlink } from 'node:fs/promises'
import { join } from 'node:path'
import { existsSync } from 'node:fs'

export class JsonStore {
  constructor(private baseDir: string) {}

  async init(): Promise<void> {
    await mkdir(join(this.baseDir, 'sessions'), { recursive: true })
    await mkdir(join(this.baseDir, 'responses'), { recursive: true })
  }

  // --- Sessions ---

  private sessionPath(id: string): string {
    return join(this.baseDir, 'sessions', `${id}.json`)
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
  }

  // --- Responses ---

  private responsesDir(sessionId: string): string {
    return join(this.baseDir, 'responses', sessionId)
  }

  private responsePath(sessionId: string, responseId: string): string {
    return join(this.responsesDir(sessionId), `${responseId}.json`)
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
