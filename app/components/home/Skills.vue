<script setup lang="ts">
import { Code2 } from '@lucide/vue'
import { skillCategories } from '~/data/portfolio'
</script>

<template>
  <section id="skills" class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
    <div class="max-w-3xl space-y-3">
      <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
        <Code2 class="w-3.5 h-3.5" />
        <span>Technical Matrix</span>
      </div>
      <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
        Technical Skills & Ecosystem
      </h2>
      <p class="text-sm sm:text-base text-slate-600 dark:text-slate-400">
        Primary specialization in PHP/Laravel backend architecture, complemented by modern Vue/Nuxt frontend engineering, database optimization, and Linux infrastructure.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="cat in skillCategories"
        :key="cat.category"
        class="p-6 rounded-2xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card space-y-4 shadow-card-light dark:shadow-card-dark hover:border-emerald-500/40 transition-all"
      >
        <div class="space-y-1">
          <h3 class="text-base font-bold text-slate-900 dark:text-white">
            {{ cat.category }}
          </h3>
          <p class="text-xs text-slate-500 dark:text-slate-400">
            {{ cat.description }}
          </p>
        </div>

        <div class="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-dark-border/60">
          <span
            v-for="skill in cat.skills"
            :key="skill"
            class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-xs font-mono text-slate-700 dark:text-slate-300 font-medium"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
