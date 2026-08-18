<script setup lang="ts">
import type { PropType } from 'vue'
import { Landmark, MessageSquare, PackageCheck, Layers, Terminal, Tv } from '@lucide/vue'
import type { ProjectItem } from '~/data/portfolio'

defineProps({
  project: {
    type: Object as PropType<ProjectItem>,
    required: true,
  },
})
</script>

<template>
  <div class="overflow-hidden rounded-2xl bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-dark-border aspect-video relative group-hover:shadow-md transition-all select-none">
    <!-- Real Image if available -->
    <img
      v-if="project.image"
      :src="project.image"
      :alt="project.name"
      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      loading="lazy"
    />

    <!-- Thematic Professional Category Placeholder if no image -->
    <div
      v-else
      class="w-full h-full p-6 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-slate-100 via-slate-50 to-white dark:from-dark-bg dark:via-dark-card dark:to-dark-surface"
    >
      <!-- Background subtle grid -->
      <div class="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      
      <!-- Top Bar inside placeholder -->
      <div class="relative z-10 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <Landmark v-if="project.categoryType === 'civic'" class="w-4 h-4" />
            <MessageSquare v-else-if="project.categoryType === 'communication'" class="w-4 h-4" />
            <PackageCheck v-else-if="project.categoryType === 'inventory'" class="w-4 h-4" />
            <Tv v-else-if="project.categoryType === 'streaming'" class="w-4 h-4" />
            <Terminal v-else-if="project.categoryType === 'developer-tool'" class="w-4 h-4" />
            <Layers v-else class="w-4 h-4" />
          </div>
          <span class="text-[11px] font-mono font-semibold uppercase text-slate-500 dark:text-slate-400">
            {{ project.category }}
          </span>
        </div>

        <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200/80 dark:bg-dark-surface border border-slate-300 dark:border-dark-border text-slate-700 dark:text-slate-300">
          {{ project.technologies[0] }} + {{ project.technologies[1] }}
        </span>
      </div>

      <!-- Center Branding inside placeholder -->
      <div class="relative z-10 space-y-1">
        <div class="text-sm sm:text-base font-bold text-slate-900 dark:text-white line-clamp-1">
          {{ project.name }}
        </div>
        <div class="text-xs font-mono text-emerald-600 dark:text-emerald-400 line-clamp-1">
          {{ project.tagline }}
        </div>
      </div>

      <!-- Bottom Status Pill -->
      <div class="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 border-t border-slate-200/80 dark:border-dark-border/80 pt-2">
        <span>Production Verified</span>
        <span class="text-emerald-600 dark:text-emerald-400 font-semibold">● Active</span>
      </div>
    </div>

    <!-- Category Floating Badge -->
    <div class="absolute top-3 left-3 px-2.5 py-1 rounded-full font-mono text-xs font-bold shadow-sm backdrop-blur-md"
      :class="[
        project.category === 'Open Source'
          ? 'bg-emerald-500/90 text-black'
          : project.category === 'Government'
          ? 'bg-blue-600/90 text-white'
          : project.category === 'Technical Lead'
          ? 'bg-purple-600/90 text-white'
          : project.category === 'Freelance'
          ? 'bg-amber-600/90 text-white'
          : 'bg-slate-900/90 text-white dark:bg-white/90 dark:text-black'
      ]"
    >
      {{ project.category }}
    </div>
  </div>
</template>
