<script setup lang="ts">
import { useI18n } from '../../i18n'

const { locale, t } = useI18n()

function toggle() {
  locale.value = locale.value === 'de' ? 'en' : 'de'
}
</script>

<template>
  <button
    @click="toggle"
    class="rounded border border-gray-300 px-3 py-1 text-sm hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
  >
    {{ locale === 'de' ? t('language.en') : t('language.de') }}
  </button>
</template>
