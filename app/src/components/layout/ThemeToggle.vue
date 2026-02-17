<script setup lang="ts">
import { ref, onMounted } from 'vue'

const dark = ref(false)

onMounted(() => {
  dark.value = document.documentElement.classList.contains('dark')
})

function toggle() {
  dark.value = !dark.value
  document.documentElement.classList.toggle('dark', dark.value)
  localStorage.setItem('ai-navigator:theme', dark.value ? 'dark' : 'light')
}
</script>

<template>
  <button
    @click="toggle"
    class="rounded border border-gray-300 px-2 py-1 text-sm hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
    :aria-label="dark ? 'Light mode' : 'Dark mode'"
  >
    {{ dark ? '☀️' : '🌙' }}
  </button>
</template>
