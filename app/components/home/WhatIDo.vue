<script setup lang="ts">
import { Server, Zap, Database, RefreshCw, Layout, Terminal } from '@lucide/vue'
import { servicesWhatIDo } from '~/data/portfolio'

const iconMap = {
  backend: Server,
  'api-integrations': Zap,
  database: Database,
  distributed: RefreshCw,
  fullstack: Layout,
  infrastructure: Terminal,
}
</script>

<template>
  <section id="services" class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
    <div class="text-center space-y-3 max-w-3xl mx-auto">
      <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
        <span>Specializations</span>
      </div>
      <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
        What I Do
      </h2>
      <p class="text-sm sm:text-base text-slate-600 dark:text-slate-400">
        Focused backend engineering, reliable API architectures, and modern web application development.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="service in servicesWhatIDo"
        :key="service.id"
        class="p-6 rounded-2xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card hover:border-emerald-500/40 transition-all space-y-4 shadow-card-light dark:shadow-card-dark group"
      >
        <div class="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">
          <component :is="iconMap[service.id as keyof typeof iconMap] || Server" class="w-5 h-5" />
        </div>

        <h3 class="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {{ service.title }}
        </h3>

        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {{ service.description }}
        </p>

        <div class="pt-2 flex flex-wrap gap-1.5">
          <span
            v-for="tech in service.technologies"
            :key="tech"
            class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-[11px] font-mono text-slate-700 dark:text-slate-300"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
