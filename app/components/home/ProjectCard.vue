<script setup lang="ts">
import type { PropType } from 'vue'
import { ArrowRight, ExternalLink } from '@lucide/vue'
import GithubIcon from '~/components/ui/icons/GithubIcon.vue'
import ProjectThumbnail from './ProjectThumbnail.vue'
import type { ProjectItem } from '~/data/portfolio'

const props = defineProps({
  project: {
    type: Object as PropType<ProjectItem>,
    required: true,
  },
})

const emit = defineEmits<{
  (e: 'viewDetails', project: ProjectItem): void
}>()
</script>

<template>
  <div class="p-6 rounded-3xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card space-y-5 shadow-card-light dark:shadow-card-dark hover:border-emerald-500/40 transition-all flex flex-col justify-between group">
    <div class="space-y-4">
      <!-- Thumbnail Visual -->
      <div class="cursor-pointer" @click="emit('viewDetails', project)">
        <ProjectThumbnail :project="project" />
      </div>

      <!-- Title & Category -->
      <div class="space-y-1.5">
        <div class="flex items-center justify-between gap-2">
          <h3
            class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors cursor-pointer"
            @click="emit('viewDetails', project)"
          >
            {{ project.name }}
          </h3>
        </div>

        <p class="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400">
          {{ project.tagline }}
        </p>
      </div>

      <!-- Short 1-2 sentence description -->
      <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
        {{ project.shortDescription }}
      </p>

      <!-- Primary Technologies Tags (Concise) -->
      <div class="flex flex-wrap gap-1.5 pt-1">
        <span
          v-for="tech in project.technologies.slice(0, 5)"
          :key="tech"
          class="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-[11px] font-mono text-slate-700 dark:text-slate-300"
        >
          {{ tech }}
        </span>
        <span
          v-if="project.technologies.length > 5"
          class="px-2 py-0.5 rounded-md bg-slate-50 dark:bg-dark-surface/60 text-[10px] font-mono text-slate-500 dark:text-slate-400"
        >
          +{{ project.technologies.length - 5 }} more
        </span>
      </div>
    </div>

    <!-- Bottom Actions: View More & Live Links -->
    <div class="pt-4 border-t border-slate-100 dark:border-dark-border/80 flex items-center justify-between gap-2">
      <button
        type="button"
        @click="emit('viewDetails', project)"
        class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs shadow-sm hover:shadow-glow-primary transition-all active:scale-95"
      >
        <span>View More</span>
        <ArrowRight class="w-3.5 h-3.5" />
      </button>

      <div class="flex items-center gap-2">
        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2 rounded-xl border border-slate-200 dark:border-dark-border bg-slate-100 dark:bg-dark-surface text-slate-700 dark:text-slate-300 hover:text-emerald-500 transition-colors"
          title="Visit Website"
          aria-label="Visit Website"
        >
          <ExternalLink class="w-3.5 h-3.5" />
        </a>

        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2 rounded-xl border border-slate-200 dark:border-dark-border bg-slate-100 dark:bg-dark-surface text-slate-700 dark:text-slate-300 hover:text-emerald-500 transition-colors"
          title="View GitHub"
          aria-label="View GitHub"
        >
          <GithubIcon class="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  </div>
</template>
