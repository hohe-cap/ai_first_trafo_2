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
  status: 'open' | 'closed'
  created_at: string
  updated_at: string
}

// --- Session API ---

export function createSession(type: string, team: string): Promise<Session> {
  return request('/api/sessions', {
    method: 'POST',
    body: JSON.stringify({ type, team }),
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

export function updateSessionStatus(id: string, status: 'open' | 'closed'): Promise<Session> {
  return request(`/api/sessions/${id}/status`, {
    method: 'PATCH',
    body: JSON.stringify({ status }),
  })
}
