import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Locale } from '../types/question'
import { saveToStorage, loadFromStorage } from '../utils/storage'

export const useSettingsStore = defineStore('settings', () => {
  const locale = ref<Locale>(loadFromStorage<Locale>('language') ?? 'de')

  function setLocale(newLocale: Locale) {
    locale.value = newLocale
    saveToStorage('language', newLocale)
  }

  return { locale, setLocale }
})
