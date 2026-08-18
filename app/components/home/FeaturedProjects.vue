<script setup lang="ts">
import { FolderGit2 } from '@lucide/vue'
import ProjectCard from './ProjectCard.vue'
import { projects } from '~/data/portfolio'
</script>

<template>
  <section id="projects" class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
    <div class="max-w-3xl space-y-3">
      <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
        <FolderGit2 class="w-3.5 h-3.5" />
        <span>Portfolio Highlights</span>
      </div>
      <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
        Featured Projects
      </h2>
      <p class="text-sm sm:text-base text-slate-600 dark:text-slate-400">
        Production platforms, high-throughput streaming systems, enterprise supply chain solutions, and open-source infrastructure.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>
