<script setup lang="ts">
import { GitCommit, ArrowRight, Layers } from '@lucide/vue'
import { engineeringPrinciples } from '~/data/portfolio'
</script>

<template>
  <section id="architecture" class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
    <div class="max-w-3xl space-y-3">
      <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
        <Layers class="w-3.5 h-3.5" />
        <span>Engineering Methodology</span>
      </div>
      <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
        How I Approach Software Engineering
      </h2>
      <p class="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
        I don’t view software development as simply writing code. I enjoy taking software from the initial business problem through architecture, database design, implementation, deployment, and continuous improvement.
      </p>
    </div>

    <!-- 9-Step Lifecycle Flow Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
      <div
        v-for="step in engineeringPrinciples"
        :key="step.step"
        class="p-5 rounded-2xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card space-y-2.5 shadow-card-light dark:shadow-card-dark hover:border-emerald-500/40 transition-all group"
      >
        <div class="flex items-center justify-between">
          <span class="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30">
            {{ step.step }}
          </span>
          <ArrowRight class="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
        </div>

        <h3 class="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {{ step.name }}
        </h3>

        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          {{ step.desc }}
        </p>
      </div>
    </div>
  </section>
</template>
