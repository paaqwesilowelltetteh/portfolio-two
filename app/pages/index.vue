<script setup lang="ts">
import Hero from '~/components/home/Hero.vue'
import ImpactStats from '~/components/home/ImpactStats.vue'
import About from '~/components/home/About.vue'
import WhatIDo from '~/components/home/WhatIDo.vue'
import Experience from '~/components/home/Experience.vue'
import FeaturedProjects from '~/components/home/FeaturedProjects.vue'
import OpenSource from '~/components/home/OpenSource.vue'
import Architecture from '~/components/home/Architecture.vue'
import Skills from '~/components/home/Skills.vue'
import Education from '~/components/home/Education.vue'
import Contact from '~/components/home/Contact.vue'
</script>

<template>
  <div class="space-y-4 sm:space-y-8">
    <Hero />
    <ImpactStats />
    <About />
    <WhatIDo />
    <Experience />
    <FeaturedProjects />
    <OpenSource />
    <Architecture />
    <Skills />
    <Education />
    <Contact />
  </div>
</template>
