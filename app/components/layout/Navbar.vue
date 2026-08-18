<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X, FileText, ArrowUpRight } from '@lucide/vue'
import GithubIcon from '~/components/ui/icons/GithubIcon.vue'
import LinkedinIcon from '~/components/ui/icons/LinkedinIcon.vue'
import ThemeToggle from '~/components/ui/ThemeToggle.vue'
import { personalInfo } from '~/data/portfolio'

const mobileOpen = ref(false)

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Open Source', href: '#opensource' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]


const activeHash = ref('')

const updateActiveHash = () => {
  activeHash.value = window.location.hash
}

onMounted(() => {
  updateActiveHash()

  window.addEventListener('hashchange', updateActiveHash)
})

onUnmounted(() => {
  window.removeEventListener('hashchange', updateActiveHash)
})

const isActivePage = (hash: string) => {
  return activeHash.value === hash
}

function closeMobile() {
  mobileOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 w-full backdrop-blur-md bg-light-bg/85 dark:bg-dark-bg/85 border-b border-slate-200/80 dark:border-dark-border/80 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <!-- Brand Logo -->
      <a href="#" class="flex items-center gap-2.5 group">
        <div class="w-8 h-8 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-mono font-bold text-sm group-hover:scale-105 transition-transform">
          ET
        </div>
        <div class="flex flex-col">
          <span class="font-bold text-sm tracking-tight text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
            {{ personalInfo.name }}
          </span>
          <span class="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 -mt-1 flex items-center gap-1">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Laravel & Backend Specialist
          </span>
        </div>
      </a>

      <!-- Desktop Nav Links -->
      <nav class="hidden lg:flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-300">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="px-3 py-1.5 rounded-lg hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-dark-surface/60 transition-colors"
          :class="{ 'text-emerald-600 dark:text-emerald-400 bg-slate-100 dark:bg-dark-surface/60': isActivePage(link.href) }"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- Right Actions: Social, Theme, CV Button -->
      <div class="hidden sm:flex items-center gap-2.5">
        <a
          :href="personalInfo.github"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-dark-surface transition-colors"
          title="GitHub Profile"
          aria-label="GitHub Profile"
        >
          <GithubIcon class="w-4 h-4" />
        </a>

        <a
          :href="personalInfo.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-dark-surface transition-colors"
          title="LinkedIn Profile"
          aria-label="LinkedIn Profile"
        >
          <LinkedinIcon class="w-4 h-4" />
        </a>

        <ThemeToggle />

        <a
          :href="personalInfo.cvPath"
          download="Enoch_Tetteh_CV.pdf"
          class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-xs shadow-sm hover:shadow-glow-primary transition-all active:scale-95"
        >
          <FileText class="w-3.5 h-3.5" />
          <span>Resume / CV</span>
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <div class="flex items-center gap-2 sm:hidden">
        <ThemeToggle />
        <button
          type="button"
          @click="mobileOpen = !mobileOpen"
          class="p-2 rounded-xl border border-slate-200 dark:border-dark-border text-slate-600 dark:text-slate-300"
          :aria-label="mobileOpen ? 'Close Menu' : 'Open Menu'"
        >
          <X v-if="mobileOpen" class="w-5 h-5" />
          <Menu v-else class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Dropdown -->
    <div
      v-if="mobileOpen"
      class="lg:hidden border-t border-slate-200 dark:border-dark-border bg-light-bg/95 dark:bg-dark-bg/95 backdrop-blur-xl px-4 py-4 space-y-3"
    >
      <nav class="flex flex-col space-y-1 text-sm font-medium">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          @click="closeMobile"
          class="px-3 py-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-dark-surface hover:text-emerald-500 transition-colors"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="pt-3 border-t border-slate-200 dark:border-dark-border flex flex-col gap-2">
        <a
          :href="personalInfo.cvPath"
          download="Enoch_Tetteh_CV.pdf"
          class="w-full py-2.5 rounded-xl bg-emerald-500 text-white font-semibold text-center text-xs flex items-center justify-center gap-2 shadow-sm"
        >
          <FileText class="w-4 h-4" />
          <span>Download CV (PDF)</span>
        </a>

        <div class="flex items-center justify-around pt-2">
          <a
            :href="personalInfo.github"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400 hover:text-emerald-500"
          >
            <GithubIcon class="w-4 h-4" />
            <span>GitHub</span>
            <ArrowUpRight class="w-3 h-3 opacity-60" />
          </a>
          <a
            :href="personalInfo.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400 hover:text-blue-500"
          >
            <LinkedinIcon class="w-4 h-4" />
            <span>LinkedIn</span>
            <ArrowUpRight class="w-3 h-3 opacity-60" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
