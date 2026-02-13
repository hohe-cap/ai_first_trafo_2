const STORAGE_PREFIX = 'ai-navigator:'

export function saveToStorage<T>(key: string, value: T): void {
  localStorage.setItem(`${STORAGE_PREFIX}${key}`, JSON.stringify(value))
}

export function loadFromStorage<T>(key: string): T | null {
  const raw = localStorage.getItem(`${STORAGE_PREFIX}${key}`)
  if (!raw) return null
  try {
    return JSON.parse(raw) as T
  } catch {
    return null
  }
}

export function removeFromStorage(key: string): void {
  localStorage.removeItem(`${STORAGE_PREFIX}${key}`)
}

export function listStorageKeys(prefix?: string): string[] {
  const fullPrefix = `${STORAGE_PREFIX}${prefix ?? ''}`
  const keys: string[] = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key?.startsWith(fullPrefix)) {
      keys.push(key.slice(STORAGE_PREFIX.length))
    }
  }
  return keys
}
