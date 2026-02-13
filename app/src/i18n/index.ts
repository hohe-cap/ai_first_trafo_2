import { ref, computed } from 'vue'
import type { Locale } from '../types/question'
import de from './de'
import en from './en'
import { saveToStorage, loadFromStorage } from '../utils/storage'

const STORAGE_KEY = 'language'

type Messages = Record<string, Record<string, string>>

const messages: Record<Locale, Messages> = { de, en } as Record<Locale, Messages>

const currentLocale = ref<Locale>(loadFromStorage<Locale>(STORAGE_KEY) ?? 'de')

export function useI18n() {
  const locale = computed({
    get: () => currentLocale.value,
    set: (val: Locale) => {
      currentLocale.value = val
      saveToStorage(STORAGE_KEY, val)
    },
  })

  function t(key: string, params?: Record<string, string | number>): string {
    const keys = key.split('.')
    let result: unknown = messages[currentLocale.value]
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = (result as Record<string, unknown>)[k]
      } else {
        return key
      }
    }
    if (typeof result !== 'string') return key

    if (params) {
      return result.replace(/\{(\w+)\}/g, (_, name) =>
        String(params[name] ?? `{${name}}`)
      )
    }
    return result
  }

  return { locale, t }
}
