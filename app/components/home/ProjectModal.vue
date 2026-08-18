<script setup lang="ts">
import { watch, onMounted, onUnmounted } from 'vue'
import type { PropType } from 'vue'
import { X, ExternalLink, CheckCircle2, Award, Zap, Server, ShieldCheck } from '@lucide/vue'
import GithubIcon from '~/components/ui/icons/GithubIcon.vue'
import ProjectThumbnail from './ProjectThumbnail.vue'
import type { ProjectItem } from '~/data/portfolio'

const props = defineProps({
  project: {
    type: Object as PropType<ProjectItem | null>,
    default: null,
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits<{
  (e: 'close'): void
}>()

function handleKeyDown(e: KeyboardEvent) {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close')
  }
}

watch(
  () => props.isOpen,
  (val) => {
    if (typeof document !== 'undefined') {
      if (val) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }
  }
)

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeyDown)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', handleKeyDown)
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen && project"
      class="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="'modal-title-' + project.id"
    >
      <!-- Backdrop Overlay -->
      <div
        class="fixed inset-0 bg-black/75 dark:bg-black/85 backdrop-blur-sm transition-opacity duration-300"
        @click="emit('close')"
      />

      <!-- Modal Card -->
      <div
        class="relative w-full max-w-3xl rounded-3xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card shadow-2xl overflow-hidden my-auto z-10 transition-all duration-300 max-h-[90vh] flex flex-col"
        @click.stop
      >
        <!-- Modal Top Bar -->
        <div class="p-5 sm:p-6 border-b border-slate-200 dark:border-dark-border flex items-center justify-between shrink-0 bg-white/90 dark:bg-dark-card/90 backdrop-blur-md sticky top-0 z-20">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span
                class="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold"
                :class="[
                  project.category === 'Open Source'
                    ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30'
                    : project.category === 'Government'
                    ? 'bg-blue-500/20 text-blue-700 dark:text-blue-400 border border-blue-500/30'
                    : project.category === 'Technical Lead'
                    ? 'bg-purple-500/20 text-purple-700 dark:text-purple-400 border border-purple-500/30'
                    : 'bg-slate-100 dark:bg-dark-surface text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-dark-border'
                ]"
              >
                {{ project.category }}
              </span>
              <span class="text-xs font-mono text-slate-500 dark:text-slate-400">
                {{ project.myRole }}
              </span>
            </div>
            <h2 :id="'modal-title-' + project.id" class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              {{ project.name }}
            </h2>
          </div>

          <button
            type="button"
            @click="emit('close')"
            class="p-2 rounded-xl border border-slate-200 dark:border-dark-border hover:bg-slate-100 dark:hover:bg-dark-surface text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            title="Close modal (Esc)"
            aria-label="Close modal"
          >
            <X class="w-5 h-5" />
          </button>
        </div>

        <!-- Scrollable Modal Body -->
        <div class="overflow-y-auto p-5 sm:p-8 space-y-8 flex-grow">
          <!-- Thumbnail Visual -->
          <div class="w-full">
            <ProjectThumbnail :project="project" />
          </div>

          <!-- Quick Action Buttons -->
          <div class="flex flex-wrap items-center gap-3">
            <a
              v-if="project.liveUrl"
              :href="project.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm hover:shadow-glow-primary transition-all active:scale-95"
            >
              <span>Visit Live Website</span>
              <ExternalLink class="w-4 h-4" />
            </a>

            <a
              v-if="project.cmsUrl"
              :href="project.cmsUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-dark-border bg-slate-100 dark:bg-dark-surface text-slate-800 dark:text-slate-200 hover:text-emerald-500 font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors"
            >
              <span>View CMS</span>
              <ExternalLink class="w-4 h-4" />
            </a>

            <a
              v-if="project.githubUrl"
              :href="project.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-dark-surface text-white border border-slate-700 dark:border-dark-border font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors"
            >
              <GithubIcon class="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          </div>

          <!-- Project Overview -->
          <div class="space-y-2">
            <h3 class="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold">
              Project Overview
            </h3>
            <p class="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {{ project.overview }}
            </p>
          </div>

          <!-- Verified Impact -->
          <div v-if="project.impact" class="p-4 sm:p-5 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 flex items-start gap-3">
            <Award class="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div class="space-y-1">
              <span class="text-xs font-mono font-bold text-emerald-950 dark:text-emerald-200 uppercase">
                Verified Impact & Scale
              </span>
              <p class="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300">
                {{ project.impact }}
              </p>
            </div>
          </div>

          <!-- Key Responsibilities & Contributions -->
          <div class="space-y-3">
            <h3 class="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
              My Engineering Contributions
            </h3>
            <ul class="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <li v-for="(point, idx) in project.workPoints" :key="idx" class="flex items-start gap-2.5">
                <CheckCircle2 class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>

          <!-- Major Features if present -->
          <div v-if="project.majorFeatures && project.majorFeatures.length" class="space-y-3">
            <h3 class="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
              Major System Features
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div
                v-for="(feat, idx) in project.majorFeatures"
                :key="idx"
                class="p-3 rounded-xl border border-slate-200 dark:border-dark-border bg-slate-50 dark:bg-dark-surface text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2"
              >
                <div class="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span>{{ feat }}</span>
              </div>
            </div>
          </div>

          <!-- Complete Tech Stack -->
          <div class="space-y-2 pt-2 border-t border-slate-200 dark:border-dark-border">
            <h3 class="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
              Technologies & Infrastructure
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-xs font-mono text-slate-800 dark:text-slate-200 font-medium"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>

        <!-- Modal Bottom Footer -->
        <div class="p-4 sm:p-5 border-t border-slate-200 dark:border-dark-border bg-slate-50 dark:bg-dark-surface/50 flex items-center justify-between shrink-0">
          <span class="text-xs font-mono text-slate-500 dark:text-slate-400">
            Enoch Tetteh • Portfolio
          </span>
          <button
            type="button"
            @click="emit('close')"
            class="px-4 py-2 rounded-xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card hover:bg-slate-100 dark:hover:bg-dark-surface text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
