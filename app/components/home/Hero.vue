<script setup lang="ts">
import { ArrowRight, FileText, Mail, Server, Zap } from "@lucide/vue";
import GithubIcon from "~/components/ui/icons/GithubIcon.vue";
import LinkedinIcon from "~/components/ui/icons/LinkedinIcon.vue";
import { personalInfo } from "~/data/portfolio";
import { NuxtImg } from "#components";
import { computed } from "vue";

const yearsOfExperience = computed(() => {
  return new Date().getFullYear() - 2019;
});
</script>

<template>
  <section
    class="relative pt-8 sm:pt-16 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
  >
    <!-- Subtle Emerald Ambient Glow -->
    <div
      class="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10"
    />

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      <!-- Left Hero Text Column (7 cols) -->
      <div class="lg:col-span-7 space-y-6 text-left">
        <!-- Verification Pill -->
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 font-mono text-xs"
        >
          <span
            class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
          ></span>
          <span
            >Full-Stack Software Developer • {{ yearsOfExperience }}+ Years
            Experience</span
          >
        </div>

        <div class="space-y-2">
          <h1
            class="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]"
          >
            {{ personalInfo.name }}
          </h1>
          <p
            class="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 dark:from-emerald-400 dark:via-emerald-300 dark:to-cyan-400"
          >
            Backend & Laravel Specialist
          </p>
        </div>

        <p
          class="text-base sm:text-lg text-slate-700 dark:text-slate-200 font-medium leading-relaxed"
        >
          "{{ personalInfo.headline }}"
        </p>

        <p
          class="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed"
        >
          {{ yearsOfExperience }}+ years of professional experience building
          production software with PHP, Laravel, Vue, Nuxt, TypeScript,
          relational databases, and cloud infrastructure.
        </p>

        <!-- CTA Action Buttons -->
        <div class="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="#projects"
            class="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-sm hover:shadow-glow-primary transition-all active:scale-95"
          >
            <span>View Projects</span>
            <ArrowRight class="w-4 h-4" />
          </a>

          <a
            :href="personalInfo.cvPath"
            download="Enoch_Tetteh_CV.pdf"
            class="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-dark-surface dark:hover:bg-slate-800 border border-slate-700 dark:border-dark-border text-white font-medium text-xs sm:text-sm flex items-center gap-2 transition-colors"
          >
            <FileText class="w-4 h-4 text-emerald-400" />
            <span>Download CV</span>
          </a>

          <a
            href="#contact"
            class="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-dark-border hover:border-emerald-500/50 bg-light-surface dark:bg-dark-card text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium text-xs sm:text-sm flex items-center gap-2 transition-colors"
          >
            <Mail class="w-4 h-4" />
            <span>Contact Me</span>
          </a>
        </div>

        <!-- Social Quick Links -->
        <div
          class="flex items-center gap-4 pt-2 text-xs font-mono text-slate-500 dark:text-slate-400"
        >
          <span>Find me on:</span>
          <a
            :href="personalInfo.github"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <GithubIcon class="w-4 h-4 text-emerald-500" />
            <span>GitHub</span>
          </a>
          <span>•</span>
          <a
            :href="personalInfo.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <LinkedinIcon class="w-4 h-4 text-blue-500" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      <!-- Right Profile / Highlights Column (5 cols) -->
      <div class="lg:col-span-5 flex justify-center">
        <div class="relative w-full max-w-sm">
          <!-- Outer Decorative Card -->
          <div
            class="relative rounded-3xl p-2 bg-gradient-to-b from-emerald-500/20 via-slate-200/50 to-slate-200/20 dark:from-emerald-500/30 dark:via-dark-border dark:to-dark-card border border-emerald-500/30 shadow-card-dark"
          >
            <div
              class="overflow-hidden rounded-2xl bg-slate-900 relative aspect-square"
            >
              <NuxtImg
                :src="personalInfo.profileImage"
                :alt="personalInfo.profileImageAlt"
                class="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                loading="eager"
              />

              <!-- Gradient Overlay at bottom of photo -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-transparent to-transparent"
              ></div>

              <div
                class="absolute bottom-4 left-4 right-4 p-3 rounded-xl backdrop-blur-md bg-dark-bg/80 border border-dark-border/80 text-left space-y-1"
              >
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-white">{{
                    personalInfo.name
                  }}</span>
                  <span
                    class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    >Available</span
                  >
                </div>
                <p class="text-[11px] text-slate-300 font-mono truncate">
                  PHP • Laravel • Vue • Nuxt • MySQL
                </p>
              </div>
            </div>
          </div>

          <!-- Floating Badges -->
          <div
            class="absolute -bottom-4 -left-4 p-3 rounded-2xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border shadow-card-dark flex items-center gap-2.5"
          >
            <div
              class="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500"
            >
              <Server class="w-4 h-4" />
            </div>
            <div>
              <div class="text-xs font-bold text-slate-900 dark:text-white">
                Backend Lead
              </div>
              <div
                class="text-[10px] text-slate-500 dark:text-slate-400 font-mono"
              >
                APIs & Architectures
              </div>
            </div>
          </div>

          <div
            class="absolute -top-3 -right-3 p-3 rounded-2xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border shadow-card-dark flex items-center gap-2.5"
          >
            <div
              class="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500"
            >
              <Zap class="w-4 h-4" />
            </div>
            <div>
              <div class="text-xs font-bold text-slate-900 dark:text-white">
                10k+ Subs
              </div>
              <div
                class="text-[10px] text-slate-500 dark:text-slate-400 font-mono"
              >
                Pebble Streaming
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
