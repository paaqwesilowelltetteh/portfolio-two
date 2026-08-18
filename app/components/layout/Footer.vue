<script setup lang="ts">
import { Mail, ArrowUp } from '@lucide/vue'
import GithubIcon from '~/components/ui/icons/GithubIcon.vue'
import LinkedinIcon from '~/components/ui/icons/LinkedinIcon.vue'
import { personalInfo } from '~/data/portfolio'

function scrollToTop() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<template>
  <footer class="border-t border-slate-200 dark:border-dark-border bg-light-surface/40 dark:bg-dark-card/40 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div class="space-y-1">
          <h3 class="text-base font-bold text-slate-900 dark:text-white">
            {{ personalInfo.name }}
          </h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 font-mono">
            {{ personalInfo.title }}
          </p>
        </div>

        <div class="flex items-center gap-3">
          <a
            :href="personalInfo.github"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2.5 rounded-xl border border-slate-200 dark:border-dark-border bg-light-surface dark:bg-dark-surface text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            title="GitHub"
            aria-label="GitHub Profile"
          >
            <GithubIcon class="w-4 h-4" />
          </a>

          <a
            :href="personalInfo.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2.5 rounded-xl border border-slate-200 dark:border-dark-border bg-light-surface dark:bg-dark-surface text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            title="LinkedIn"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon class="w-4 h-4" />
          </a>

          <a
            :href="`mailto:${personalInfo.email}`"
            class="p-2.5 rounded-xl border border-slate-200 dark:border-dark-border bg-light-surface dark:bg-dark-surface text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            title="Email Enoch Tetteh"
            aria-label="Email Enoch Tetteh"
          >
            <Mail class="w-4 h-4" />
          </a>

          <button
            type="button"
            @click="scrollToTop"
            class="p-2.5 rounded-xl border border-slate-200 dark:border-dark-border bg-light-surface dark:bg-dark-surface text-slate-600 dark:text-slate-400 hover:text-emerald-500 hover:border-emerald-500/40 transition-colors ml-2"
            title="Scroll to Top"
            aria-label="Scroll to Top"
          >
            <ArrowUp class="w-4 h-4" />
          </button>
        </div>
      </div>

      <div class="pt-6 border-t border-slate-200/60 dark:border-dark-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
        <p>© 2026 Enoch Tetteh. All rights reserved.</p>
        <p class="font-mono text-[11px]">Built with Nuxt 4, TypeScript & Tailwind CSS</p>
      </div>
    </div>
  </footer>
</template>
