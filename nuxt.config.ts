// https://nuxt.com/docs/api/configuration/nuxt-config
import { yearsOfExperience } from './app/data/portfolio'

export default (defineNuxtConfig as any)({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@vercel/speed-insights',
    '@vercel/analytics'
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        class: 'dark scroll-smooth',
      },
      title: 'Enoch Tetteh | Full-Stack Software Developer & Laravel Specialist',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Enoch Tetteh is a Full-Stack Software Developer and Backend & Laravel Specialist with ' + yearsOfExperience + '+ years of experience building scalable APIs, production web applications, payment systems, content platforms, and modern Vue/Nuxt applications.',
        },
        { name: 'author', content: 'Enoch Tetteh' },
        { name: 'theme-color', content: '#10b981' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://enoch-portfolio.vercel.app/' },
        { property: 'og:title', content: 'Enoch Tetteh | Full-Stack Software Developer & Laravel Specialist' },
        { property: 'og:description', content: 'Software developer with ' + yearsOfExperience + '+ years of experience building production software with PHP, Laravel, Vue, Nuxt, TypeScript, databases, and cloud infrastructure.' },
        { property: 'og:image', content: 'https://enoch-portfolio.vercel.app/images/og-image.jpg' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://enoch-portfolio.vercel.app/' },
        { name: 'twitter:title', content: 'Enoch Tetteh | Full-Stack Software Developer & Laravel Specialist' },
        { name: 'twitter:description', content: 'Software developer with ' + yearsOfExperience + '+ years of experience building production software with PHP, Laravel, Vue, Nuxt, TypeScript, databases, and cloud infrastructure.' },
        { name: 'twitter:image', content: 'https://enoch-portfolio.vercel.app/images/og-image.jpg' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'canonical', href: 'https://enoch-portfolio.vercel.app/' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],
})
