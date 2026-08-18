<script setup lang="ts">
import { Code, Database, Server, Cpu, CheckCircle2 } from '@lucide/vue'
import { personalInfo } from '~/data/portfolio'
</script>

<template>
  <section id="about" class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
    <div class="max-w-3xl space-y-3">
      <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
        <Cpu class="w-3.5 h-3.5" />
        <span>About Me</span>
      </div>
      <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
        Engineering reliable systems that solve real business problems.
      </h2>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      <!-- Left Column: Biography & Philosophy -->
      <div class="lg:col-span-7 space-y-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
        <p>
          I’m a software developer focused on building reliable, maintainable systems that solve real business problems.
        </p>

        <p>
          My strongest area is backend engineering with <strong>PHP and Laravel</strong>, where I work on APIs, authentication, databases, payment integrations, queues, Redis, and application architecture.
        </p>

        <p>
          I also work across the frontend using <strong>Vue.js, Nuxt, TypeScript, and Tailwind CSS</strong>.
        </p>

        <p>
          Beyond implementation, I enjoy writing technical specifications, designing application architecture, debugging production systems, working with infrastructure, and collaborating with development teams.
        </p>

        <div class="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="p-3.5 rounded-xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card flex items-start gap-2.5">
            <CheckCircle2 class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <div class="text-xs">
              <span class="font-bold text-slate-900 dark:text-white block">Clean & Maintainable</span>
              <span class="text-slate-500 dark:text-slate-400">Strict adherence to SOLID & modular patterns</span>
            </div>
          </div>

          <div class="p-3.5 rounded-xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card flex items-start gap-2.5">
            <CheckCircle2 class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <div class="text-xs">
              <span class="font-bold text-slate-900 dark:text-white block">Production Tested</span>
              <span class="text-slate-500 dark:text-slate-400">Live systems serving 10k+ active users</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Quick Profile Summary Card -->
      <div class="lg:col-span-5 p-6 rounded-2xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card space-y-6 shadow-card-light dark:shadow-card-dark">
        <h3 class="text-base font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-dark-border pb-3">
          Profile Quick Facts
        </h3>

        <div class="space-y-4 text-xs">
          <div class="flex items-center justify-between">
            <span class="text-slate-500 dark:text-slate-400 font-mono">Location</span>
            <span class="font-semibold text-slate-900 dark:text-white">{{ personalInfo.location }}</span>
          </div>

          <div class="flex items-center justify-between">
            <span class="text-slate-500 dark:text-slate-400 font-mono">Experience</span>
            <span class="font-semibold text-emerald-600 dark:text-emerald-400 font-mono">{{ personalInfo.yearsOfExperience }} Years</span>
          </div>

          <div class="flex items-center justify-between">
            <span class="text-slate-500 dark:text-slate-400 font-mono">Core Backend</span>
            <span class="font-semibold text-slate-900 dark:text-white">PHP / Laravel</span>
          </div>

          <div class="flex items-center justify-between">
            <span class="text-slate-500 dark:text-slate-400 font-mono">Core Frontend</span>
            <span class="font-semibold text-slate-900 dark:text-white">Vue.js / Nuxt 4 / TS</span>
          </div>

          <div class="flex items-center justify-between">
            <span class="text-slate-500 dark:text-slate-400 font-mono">Database / Cache</span>
            <span class="font-semibold text-slate-900 dark:text-white">MySQL / Redis</span>
          </div>

          <div class="flex items-center justify-between">
            <span class="text-slate-500 dark:text-slate-400 font-mono">Education</span>
            <span class="font-semibold text-slate-900 dark:text-white">BSc. Information Technology</span>
          </div>
        </div>

        <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border space-y-1">
          <div class="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold uppercase">Open to Opportunities</div>
          <div class="text-xs text-slate-600 dark:text-slate-400">Available for full-time backend and full-stack software development roles.</div>
        </div>
      </div>
    </div>
  </section>
</template>
