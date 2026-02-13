<script setup lang="ts">
import { useI18n } from '../i18n'

const { t } = useI18n()
</script>

<template>
  <div class="mx-auto max-w-3xl px-4 py-12">
    <h1 class="mb-4 text-2xl font-bold text-gray-900">{{ t('assessment.selectType') }}</h1>
    <p class="text-gray-500">Assessment-Flow wird in Story 4 & 5 implementiert.</p>
  </div>
</template>
