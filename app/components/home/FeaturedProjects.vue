<script setup lang="ts">
import { ref, computed } from 'vue'
import { FolderGit2 } from '@lucide/vue'
import ProjectCard from './ProjectCard.vue'
import ProjectModal from './ProjectModal.vue'
import { projects, type ProjectItem } from '~/data/portfolio'

const activeFilter = ref<'all' | 'production' | 'open-source' | 'government' | 'internal'>('all')
const selectedProject = ref<ProjectItem | null>(null)
const isModalOpen = ref(false)

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects
  if (activeFilter.value === 'production') return projects.filter(p => p.category === 'Production' || p.category === 'Technical Lead')
  if (activeFilter.value === 'open-source') return projects.filter(p => p.category === 'Open Source')
  if (activeFilter.value === 'government') return projects.filter(p => p.category === 'Government' || p.category === 'Freelance')
  if (activeFilter.value === 'internal') return projects.filter(p => p.category === 'Internal System')
  return projects
})

function openDetails(project: ProjectItem) {
  selectedProject.value = project
  isModalOpen.value = true
}

function closeDetails() {
  isModalOpen.value = false
  setTimeout(() => {
    selectedProject.value = null
  }, 200)
}
</script>

<template>
  <section id="projects" class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div class="max-w-3xl space-y-3">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          <FolderGit2 class="w-3.5 h-3.5" />
          <span>Portfolio Highlights</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Featured Projects
        </h2>
        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          Production streaming platforms, open-source developer tooling, enterprise supply chains, and government digital services.
        </p>
      </div>

      <!-- Category Filter Tabs -->
      <div class="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-xs font-mono">
        <button
          type="button"
          @click="activeFilter = 'all'"
          class="px-3 py-1.5 rounded-xl transition-all"
          :class="activeFilter === 'all' ? 'bg-emerald-500 text-white font-bold shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'"
        >
          All ({{ projects.length }})
        </button>
        <button
          type="button"
          @click="activeFilter = 'production'"
          class="px-3 py-1.5 rounded-xl transition-all"
          :class="activeFilter === 'production' ? 'bg-emerald-500 text-white font-bold shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'"
        >
          Production
        </button>
        <button
          type="button"
          @click="activeFilter = 'open-source'"
          class="px-3 py-1.5 rounded-xl transition-all"
          :class="activeFilter === 'open-source' ? 'bg-emerald-500 text-white font-bold shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'"
        >
          Open Source
        </button>
        <button
          type="button"
          @click="activeFilter = 'government'"
          class="px-3 py-1.5 rounded-xl transition-all"
          :class="activeFilter === 'government' ? 'bg-emerald-500 text-white font-bold shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'"
        >
          Public Sector
        </button>
        <button
          type="button"
          @click="activeFilter = 'internal'"
          class="px-3 py-1.5 rounded-xl transition-all"
          :class="activeFilter === 'internal' ? 'bg-emerald-500 text-white font-bold shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'"
        >
          Internal
        </button>
      </div>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
        @view-details="openDetails"
      />
    </div>

    <!-- Detailed Modal View -->
    <ProjectModal
      :project="selectedProject"
      :is-open="isModalOpen"
      @close="closeDetails"
    />
  </section>
</template>
