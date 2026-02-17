const BASE = ''

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (!response.ok) {
    const body = await response.json().catch(() => ({}))
    throw new Error((body as Record<string, string>).error || `HTTP ${response.status}`)
  }
  if (response.status === 204) return undefined as T
  return response.json() as T
}

// --- Session Types ---

export interface Session {
  id: string
  code: string
  type: string
  team: string
  status: 'open' | 'closed' | 'archived'
  dimensions?: string[]
  cycle?: number
  created_at: string
  updated_at: string
  response_count?: number
}

// --- Session API ---

export function createSession(type: string, team: string, dimensions?: string[], cycle?: number): Promise<Session> {
  return request('/api/sessions', {
    method: 'POST',
    body: JSON.stringify({ type, team, dimensions, cycle }),
  })
}

export function getSessions(): Promise<Session[]> {
  return request('/api/sessions')
}

export function getSessionByCode(code: string): Promise<Session> {
  return request(`/api/sessions/code/${code.toUpperCase()}`)
}

export function getSession(id: string): Promise<Session> {
  return request(`/api/sessions/${id}`)
}

export function updateSessionStatus(id: string, status: 'open' | 'closed' | 'archived'): Promise<Session> {
  return request(`/api/sessions/${id}/status`, {
    method: 'PATCH',
    body: JSON.stringify({ status }),
  })
}

export function deleteSession(id: string): Promise<void> {
  return request(`/api/sessions/${id}`, { method: 'DELETE' })
}

export function bulkArchiveTeam(team: string): Promise<{ archived: number }> {
  return request('/api/sessions/bulk-archive', {
    method: 'POST',
    body: JSON.stringify({ team }),
  })
}

// --- Response API ---

import type { ResponsePayload } from '../types/response'

export function saveResponse(sessionId: string, payload: ResponsePayload): Promise<ResponsePayload> {
  return request(`/api/sessions/${sessionId}/responses`, {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export function getResponse(sessionId: string, respondentId: string): Promise<ResponsePayload> {
  return request(`/api/sessions/${sessionId}/responses/${respondentId}`)
}

export function getResponses(sessionId: string): Promise<ResponsePayload[]> {
  return request(`/api/sessions/${sessionId}/responses`)
}

// --- Results API ---

import type { SessionResult } from '../types/scoring'

export function getSessionResults(sessionId: string): Promise<SessionResult> {
  return request(`/api/sessions/${sessionId}/results`)
}
