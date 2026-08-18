<script setup lang="ts">
import { Sun, Moon } from '@lucide/vue'
import { useTheme } from '~/composables/useTheme'

const { theme, toggleTheme } = useTheme()
</script>

<template>
  <button
    type="button"
    @click="toggleTheme"
    class="p-2 rounded-xl border border-slate-200 dark:border-dark-border bg-light-surface dark:bg-dark-surface text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/40 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
    :title="theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
    :aria-label="theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
  >
    <Sun v-if="theme === 'dark'" class="w-4 h-4 text-amber-400" />
    <Moon v-else class="w-4 h-4 text-slate-700" />
  </button>
</template>
