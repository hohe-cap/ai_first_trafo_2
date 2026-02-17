<script setup lang="ts">
import { useI18n } from '../../i18n'
import LanguageToggle from './LanguageToggle.vue'
import ThemeToggle from './ThemeToggle.vue'

const { t } = useI18n()
</script>

<template>
  <header class="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
    <div class="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
      <router-link to="/" class="flex items-center gap-2 text-gray-900 no-underline dark:text-gray-100">
        <span class="text-xl font-bold">{{ t('app.title') }}</span>
        <span class="text-sm text-gray-500 dark:text-gray-400">{{ t('app.subtitle') }}</span>
      </router-link>
      <div class="flex items-center gap-2">
        <ThemeToggle />
        <LanguageToggle />
      </div>
    </div>
  </header>
</template>
