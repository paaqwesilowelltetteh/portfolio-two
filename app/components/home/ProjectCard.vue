<script setup lang="ts">
import type { PropType } from 'vue'
import { ExternalLink, CheckCircle2 } from '@lucide/vue'
import GithubIcon from '~/components/ui/icons/GithubIcon.vue'
import type { ProjectItem } from '~/data/portfolio'

defineProps({
  project: {
    type: Object as PropType<ProjectItem>,
    required: true,
  },
})
</script>

<template>
  <div class="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card space-y-6 shadow-card-light dark:shadow-card-dark hover:border-emerald-500/40 transition-all flex flex-col justify-between group">
    <div class="space-y-6">
      <!-- Thumbnail Image -->
      <div class="overflow-hidden rounded-2xl bg-slate-900 border border-slate-200 dark:border-dark-border aspect-video relative group-hover:shadow-md transition-shadow">
        <img
          :src="project.image"
          :alt="project.name"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div v-if="project.isOpenSource" class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald-500/90 text-black font-mono text-xs font-bold shadow-sm">
          Open Source
        </div>
      </div>

      <!-- Header & Tagline -->
      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <h3 class="text-2xl font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {{ project.name }}
          </h3>
          <span class="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-slate-600 dark:text-slate-400">
            {{ project.myRole }}
          </span>
        </div>
        <p class="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 font-mono">
          {{ project.tagline }}
        </p>
      </div>

      <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        {{ project.description }}
      </p>

      <!-- Impact Badge -->
      <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border space-y-1">
        <div class="text-[11px] font-mono font-semibold uppercase text-emerald-600 dark:text-emerald-400">
          Verified Impact
        </div>
        <div class="text-xs text-slate-700 dark:text-slate-300">
          {{ project.impact }}
        </div>
      </div>

      <!-- Scope of Work -->
      <div class="space-y-2">
        <div class="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
          Key Contributions
        </div>
        <ul class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
          <li v-for="(point, idx) in project.workPoints" :key="idx" class="flex items-start gap-2">
            <CheckCircle2 class="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
            <span>{{ point }}</span>
          </li>
        </ul>
      </div>

      <!-- Technologies -->
      <div class="flex flex-wrap gap-1.5 pt-2">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="px-2 py-0.5 rounded bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-[11px] font-mono text-slate-700 dark:text-slate-300"
        >
          {{ tech }}
        </span>
      </div>
    </div>

    <!-- Bottom Actions -->
    <div class="pt-4 border-t border-slate-200 dark:border-dark-border flex flex-wrap items-center gap-3">
      <a
        v-if="project.liveUrl"
        :href="project.liveUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs transition-colors"
      >
        <span>Visit Live Platform</span>
        <ExternalLink class="w-3.5 h-3.5" />
      </a>

      <a
        v-if="project.cmsUrl"
        :href="project.cmsUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 dark:border-dark-border bg-slate-100 dark:bg-dark-surface text-slate-700 dark:text-slate-200 hover:text-emerald-500 text-xs transition-colors"
      >
        <span>View CMS</span>
        <ExternalLink class="w-3.5 h-3.5" />
      </a>

      <a
        v-if="project.githubUrl"
        :href="project.githubUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-dark-surface text-white text-xs border border-slate-700 dark:border-dark-border transition-colors"
      >
        <GithubIcon class="w-3.5 h-3.5" />
        <span>View on GitHub</span>
      </a>
    </div>
  </div>
</template>
