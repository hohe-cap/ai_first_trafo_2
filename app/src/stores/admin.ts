import { defineStore } from 'pinia'
import { ref } from 'vue'

const STORAGE_KEY = 'craft-admin-key'

export const useAdminStore = defineStore('admin', () => {
  const key = ref(sessionStorage.getItem(STORAGE_KEY) || '')
  const verified = ref(false)
  const checking = ref(false)

  function setKey(newKey: string) {
    key.value = newKey
    sessionStorage.setItem(STORAGE_KEY, newKey)
    verified.value = false
  }

  function clearKey() {
    key.value = ''
    sessionStorage.removeItem(STORAGE_KEY)
    verified.value = false
  }

  async function verify(): Promise<boolean> {
    if (!key.value) {
      verified.value = false
      return false
    }
    checking.value = true
    try {
      const res = await fetch('/api/admin/verify', {
        headers: { 'X-Admin-Key': key.value },
      })
      verified.value = res.ok
      return res.ok
    } catch {
      verified.value = false
      return false
    } finally {
      checking.value = false
    }
  }

  async function checkProtected(): Promise<boolean> {
    try {
      const res = await fetch('/api/admin/status')
      const data = await res.json()
      return data.protected === true
    } catch {
      return false
    }
  }

  return { key, verified, checking, setKey, clearKey, verify, checkProtected }
})
