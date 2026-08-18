<script setup lang="ts">
import { Sparkles, ArrowRight, ShieldCheck, Database, RefreshCw } from '@lucide/vue'
import GithubIcon from '~/components/ui/icons/GithubIcon.vue'
</script>

<template>
  <section id="opensource" class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
    <div class="p-8 sm:p-12 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-white dark:via-dark-card to-white dark:to-dark-bg space-y-8 shadow-card-light dark:shadow-card-dark">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div class="space-y-2">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
            <Sparkles class="w-3.5 h-3.5" />
            <span>Open Source Tooling</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Nuxt Bearer Auth
          </h2>
          <p class="text-sm sm:text-base font-semibold text-emerald-600 dark:text-emerald-400 font-mono">
            Secure bearer-token authentication for Nuxt, without exposing your API tokens to the browser.
          </p>
        </div>

        <a
          href="https://github.com/paaqwesilowelltetteh/nuxt-bearer-auth"
          target="_blank"
          rel="noopener noreferrer"
          class="shrink-0 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-black font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
        >
          <GithubIcon class="w-4 h-4" />
          <span>View on GitHub</span>
          <ArrowRight class="w-4 h-4" />
        </a>
      </div>

      <p class="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
        An open-source Nuxt authentication package designed to simplify bearer-token authentication in Nuxt applications. It keeps bearer tokens safely in server-side Redis sessions and provides the browser with protected HTTP-only cookies, eliminating the need to store sensitive API credentials in client-side localStorage.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
        <div class="p-4 rounded-xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-surface space-y-1">
          <div class="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
            <ShieldCheck class="w-4 h-4 text-emerald-500" />
            <span>Zero-Trust Token Isolation</span>
          </div>
          <p class="text-[11px] text-slate-500 dark:text-slate-400">Tokens never touch browser memory or localStorage.</p>
        </div>

        <div class="p-4 rounded-xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-surface space-y-1">
          <div class="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
            <Database class="w-4 h-4 text-emerald-500" />
            <span>Redis Session Store</span>
          </div>
          <p class="text-[11px] text-slate-500 dark:text-slate-400">Server-side multi-device tracking and instant remote revocation.</p>
        </div>

        <div class="p-4 rounded-xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-surface space-y-1">
          <div class="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
            <RefreshCw class="w-4 h-4 text-emerald-500" />
            <span>SSR Hydration & Silent Refresh</span>
          </div>
          <p class="text-[11px] text-slate-500 dark:text-slate-400">Synchronous server rendering with zero auth flicker.</p>
        </div>
      </div>
    </div>
  </section>
</template>
