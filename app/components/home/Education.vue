<script setup lang="ts">
import { GraduationCap, MapPin, Calendar, Award } from '@lucide/vue'
import { education } from '~/data/portfolio'
</script>

<template>
  <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div class="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card shadow-card-light dark:shadow-card-dark flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div class="flex items-start gap-4">
        <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
          <GraduationCap class="w-6 h-6" />
        </div>
        <div class="space-y-1">
          <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <span>Academic Background</span>
          </div>
          <h3 class="text-xl font-extrabold text-slate-900 dark:text-white">
            {{ education.degree }}
          </h3>
          <p class="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
            {{ education.institution }}
          </p>
        </div>
      </div>

      <div class="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-600 dark:text-slate-400">
        <span class="flex items-center gap-1.5 bg-slate-100 dark:bg-dark-surface px-3 py-1.5 rounded-xl border border-slate-200 dark:border-dark-border">
          <Award class="w-4 h-4 text-emerald-500" />
          {{ education.classification }}
        </span>
        <span class="flex items-center gap-1.5 bg-slate-100 dark:bg-dark-surface px-3 py-1.5 rounded-xl border border-slate-200 dark:border-dark-border">
          <Calendar class="w-4 h-4 text-emerald-500" />
          Graduated {{ education.graduationYear }}
        </span>
        <span class="flex items-center gap-1.5 bg-slate-100 dark:bg-dark-surface px-3 py-1.5 rounded-xl border border-slate-200 dark:border-dark-border">
          <MapPin class="w-4 h-4 text-emerald-500" />
          {{ education.location }}
        </span>
      </div>
    </div>
  </section>
</template>
