<script setup lang="ts">
import { Briefcase, Calendar, MapPin, Award, CheckCircle2 } from '@lucide/vue'
import { experiences } from '~/data/portfolio'
</script>

<template>
  <section id="experience" class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
    <div class="max-w-3xl space-y-3">
      <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
        <Briefcase class="w-3.5 h-3.5" />
        <span>Career History</span>
      </div>
      <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
        Professional Experience
      </h2>
      <p class="text-sm sm:text-base text-slate-600 dark:text-slate-400">
        6+ years of building production-grade software, leading developer teams, and maintaining mission-critical backend systems.
      </p>
    </div>

    <div class="space-y-8">
      <div
        v-for="exp in experiences"
        :key="exp.id"
        class="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card space-y-6 shadow-card-light dark:shadow-card-dark"
      >
        <!-- Header Info -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-dark-border pb-6">
          <div class="space-y-1">
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">
              {{ exp.role }}
            </h3>
            <p class="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              {{ exp.company }}
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span class="flex items-center gap-1 bg-slate-100 dark:bg-dark-surface px-2.5 py-1 rounded-lg border border-slate-200 dark:border-dark-border">
              <Calendar class="w-3.5 h-3.5 text-emerald-500" />
              {{ exp.period }}
            </span>
            <span class="flex items-center gap-1 bg-slate-100 dark:bg-dark-surface px-2.5 py-1 rounded-lg border border-slate-200 dark:border-dark-border">
              <MapPin class="w-3.5 h-3.5 text-emerald-500" />
              {{ exp.location }}
            </span>
          </div>
        </div>

        <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {{ exp.description }}
        </p>

        <!-- Highlight Callout (e.g. Traceable USAID Lead) -->
        <div v-if="exp.highlight" class="p-4 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 flex items-start gap-3">
          <Award class="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <div class="text-xs sm:text-sm">
            <span class="font-bold text-emerald-950 dark:text-emerald-200 block">Key Leadership Achievement:</span>
            <span class="text-emerald-800 dark:text-emerald-300">{{ exp.highlight }}</span>
          </div>
        </div>

        <!-- Responsibilities Checklist -->
        <div class="space-y-2">
          <div class="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Responsibilities & Scope
          </div>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            <li v-for="(resp, idx) in exp.responsibilities" :key="idx" class="flex items-start gap-2">
              <CheckCircle2 class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>{{ resp }}</span>
            </li>
          </ul>
        </div>

        <!-- Technologies Used -->
        <div class="pt-2 flex flex-wrap items-center gap-1.5 border-t border-slate-200 dark:border-dark-border">
          <span class="text-xs font-mono text-slate-500 dark:text-slate-400 mr-2">Stack:</span>
          <span
            v-for="tech in exp.technologies"
            :key="tech"
            class="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-[11px] font-mono text-slate-700 dark:text-slate-300"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
