<script setup lang="ts">
import { ref } from 'vue'
import { Mail, Phone, Copy, Check, Send } from '@lucide/vue'
import GithubIcon from '~/components/ui/icons/GithubIcon.vue'
import LinkedinIcon from '~/components/ui/icons/LinkedinIcon.vue'
import { personalInfo } from '~/data/portfolio'
import { useCopy } from '~/composables/useCopy'

const { copied, copy } = useCopy()

const senderName = ref('')
const senderEmail = ref('')
const message = ref('')
const sentStatus = ref(false)

function handleSubmit() {
  if (!senderEmail.value || !message.value) return
  // Compose mailto link
  const subject = encodeURIComponent(`Portfolio Inquiry from ${senderName.value || 'Collaborator'}`)
  const body = encodeURIComponent(`${message.value}\n\nFrom: ${senderName.value} (${senderEmail.value})`)
  window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
  sentStatus.value = true
}
</script>

<template>
  <section id="contact" class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
    <div class="max-w-3xl space-y-3">
      <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
        <Mail class="w-3.5 h-3.5" />
        <span>Get in Touch</span>
      </div>
      <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
        Let’s Build Something Reliable
      </h2>
      <p class="text-sm sm:text-base text-slate-600 dark:text-slate-400">
        Have a project, full-time role, or technical challenge to discuss? I’d love to connect.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
      <!-- Left Column: Contact Cards -->
      <div class="lg:col-span-5 space-y-4">
        <!-- Email Primary Card -->
        <div class="p-6 rounded-2xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card space-y-3 shadow-card-light dark:shadow-card-dark">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
              <Mail class="w-4 h-4 text-emerald-500" />
              <span>Primary Email</span>
            </div>
            <button
              type="button"
              @click="copy(personalInfo.email)"
              class="p-1.5 rounded-lg bg-slate-100 dark:bg-dark-surface hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors"
              :title="copied ? 'Copied!' : 'Copy email'"
            >
              <Check v-if="copied" class="w-3.5 h-3.5 text-emerald-500" />
              <Copy v-else class="w-3.5 h-3.5" />
            </button>
          </div>

          <a
            :href="`mailto:${personalInfo.email}`"
            class="text-base font-semibold text-emerald-600 dark:text-emerald-400 hover:underline block break-all font-mono"
          >
            {{ personalInfo.email }}
          </a>
          <p class="text-xs text-slate-500 dark:text-slate-400">
            Direct inbox for technical inquiries and career opportunities.
          </p>
        </div>

        <!-- Phone Card -->
        <div class="p-6 rounded-2xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card space-y-2 shadow-card-light dark:shadow-card-dark">
          <div class="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
            <Phone class="w-4 h-4 text-emerald-500" />
            <span>Mobile & WhatsApp</span>
          </div>
          <div class="space-y-1 text-sm font-mono text-slate-700 dark:text-slate-300">
            <div v-for="phone in personalInfo.phones" :key="phone">
              <a :href="`tel:${phone.replace(/\s+/g, '')}`" class="hover:text-emerald-500 transition-colors">
                {{ phone }}
              </a>
            </div>
          </div>
        </div>

        <!-- Social Connections -->
        <div class="p-6 rounded-2xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card space-y-3 shadow-card-light dark:shadow-card-dark">
          <div class="text-xs font-bold text-slate-900 dark:text-white">
            Developer Profiles
          </div>
          <div class="flex flex-col gap-2 text-xs font-mono">
            <a
              :href="personalInfo.github"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            >
              <GithubIcon class="w-4 h-4 text-emerald-500" />
              <span>github.com/paaqwesilowelltetteh</span>
            </a>
            <a
              :href="personalInfo.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-500"
            >
              <LinkedinIcon class="w-4 h-4 text-blue-500" />
              <span>linkedin.com/in/enoch-tetteh-b1b6371bb</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Right Column: Interactive Quick Message Form -->
      <div class="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card space-y-6 shadow-card-light dark:shadow-card-dark">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white">
          Send a Direct Note
        </h3>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label class="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1">Your Name</label>
            <input
              v-model="senderName"
              type="text"
              placeholder="e.g. Alex Smith"
              class="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-dark-border bg-light-surface dark:bg-dark-surface text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            />
          </div>

          <div>
            <label class="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1">Your Email</label>
            <input
              v-model="senderEmail"
              type="email"
              required
              placeholder="alex@company.com"
              class="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-dark-border bg-light-surface dark:bg-dark-surface text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            />
          </div>

          <div>
            <label class="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1">Message</label>
            <textarea
              v-model="message"
              required
              rows="4"
              placeholder="Hi Enoch, I'd like to discuss a backend opportunity or project..."
              class="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-dark-border bg-light-surface dark:bg-dark-surface text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm hover:shadow-glow-primary transition-all active:scale-95"
          >
            <Send class="w-4 h-4" />
            <span>Send Message via Email</span>
          </button>

          <p v-if="sentStatus" class="text-xs text-emerald-600 dark:text-emerald-400 font-mono text-center">
            ✓ Email client opened with your message pre-filled.
          </p>
        </form>
      </div>
    </div>
  </section>
</template>
