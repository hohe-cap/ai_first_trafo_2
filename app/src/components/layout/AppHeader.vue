<script setup lang="ts">
import { useI18n } from '../../i18n'
import LanguageToggle from './LanguageToggle.vue'

const { t } = useI18n()
</script>

<template>
  <header class="border-b border-gray-200 bg-white">
    <div class="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
      <router-link to="/" class="flex items-center gap-2 text-gray-900 no-underline">
        <span class="text-xl font-bold">{{ t('app.title') }}</span>
        <span class="text-sm text-gray-500">{{ t('app.subtitle') }}</span>
      </router-link>
      <LanguageToggle />
    </div>
  </header>
</template>
