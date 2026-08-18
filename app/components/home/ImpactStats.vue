<script setup lang="ts">
import { impactStats } from '~/data/portfolio'
</script>

<template>
  <section class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      <div
        v-for="stat in impactStats"
        :key="stat.label"
        class="p-6 rounded-2xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card hover:border-emerald-500/40 transition-all space-y-2 shadow-card-light dark:shadow-card-dark group"
      >
        <div class="text-3xl sm:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 tracking-tight font-mono group-hover:scale-105 transition-transform">
          {{ stat.value }}
        </div>
        <div class="text-sm font-bold text-slate-900 dark:text-white">
          {{ stat.label }}
        </div>
        <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          {{ stat.subtext }}
        </p>
      </div>
    </div>
  </section>
</template>
