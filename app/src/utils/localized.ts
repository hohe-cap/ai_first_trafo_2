import type { LocalizedText, Locale } from '../types/question'

/**
 * Extracts the text for the current locale from a bilingual field.
 * Falls back to 'de' if the requested locale is not available.
 */
export function localized(text: LocalizedText | undefined, locale: Locale): string {
  if (!text) return ''
  return text[locale] ?? text.de ?? ''
}
