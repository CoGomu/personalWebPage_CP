<template>
  <div class="flex flex-col min-h-screen">
    <!-- 1. Hero Section -->
    <section class="flex items-center justify-center bg-gradient-light dark:bg-gradient-dark">
      <div class="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div class="text-center md:text-left">
          <h1 class="text-4xl md:text-5xl font-bold text-primary dark:text-primary-dark mb-4">Hero Title</h1>
          <p class="text-lg text-secondary dark:text-secondary mb-4">Hero subtitle placeholder.</p>
        </div>
        <div class="flex justify-center md:justify-end">
          <div class="w-72 h-96 bg-border dark:border-border-dark rounded-xl overflow-hidden">
            <img src="/images/hero-portrait.jpg" alt="Hero portrait" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Metaphor Section -->
    <section class="flex items-center justify-center bg-surface dark:bg-surface-dark">
      <div class="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 class="text-3xl font-bold text-primary dark:text-primary-dark mb-4">Metaphor</h2>
        <p class="text-lg text-secondary dark:text-secondary mb-4">Metaphor content placeholder.</p>
      </div>
    </section>

    <!-- 3. Offering Section -->
    <section class="flex items-center justify-center bg-bg dark:bg-bg-dark">
      <div class="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 class="text-3xl font-bold text-primary dark:text-primary-dark mb-8">Offering</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-surface dark:bg-surface-dark p-6 rounded-xl shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark transition-shadow duration-200">
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-2">Service 1</h3>
            <p class="text-secondary dark:text-secondary">Placeholder description.</p>
          </div>
          <div class="bg-surface dark:bg-surface-dark p-6 rounded-xl shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark transition-shadow duration-200">
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-2">Service 2</h3>
            <p class="text-secondary dark:text-secondary">Placeholder description.</p>
          </div>
          <div class="bg-surface dark:bg-surface-dark p-6 rounded-xl shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark transition-shadow duration-200">
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-2">Service 3</h3>
            <p class="text-secondary dark:text-secondary">Placeholder description.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Why Section -->
    <section class="flex items-center justify-center bg-surface dark:bg-surface-dark">
      <div class="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 class="text-3xl font-bold text-primary dark:text-primary-dark mb-4">Why</h2>
        <p class="text-lg text-secondary dark:text-secondary">Why content placeholder.</p>
      </div>
    </section>

    <!-- 5. Call to Action Section -->
    <section class="flex items-center justify-center bg-bg dark:bg-bg-dark">
      <div class="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 class="text-3xl font-bold text-primary dark:text-primary-dark mb-4">Call to Action</h2>
        <p class="text-lg text-secondary dark:text-secondary mb-8">CTA description placeholder.</p>
        <router-link
          to="/contact"
          class="inline-block px-8 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors duration-200 shadow-card dark:shadow-card-dark"
        >
          Get in Touch
        </router-link>
      </div>
    </section>

    <!-- Footer -->
    <footer class="text-center py-6 text-secondary dark:text-secondary text-sm border-t border-border dark:border-border-dark">
      <p>&copy; {{ currentYear }} PAP. Alle Rechte vorbehalten.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
