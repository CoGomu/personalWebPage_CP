<template>
  <div class="flex flex-col min-h-screen">
    <!-- 1. Headline Section -->
    <section class="flex items-center justify-center bg-gradient-light dark:bg-gradient-dark">
      <div class="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-primary dark:text-primary-dark mb-4">Services</h1>
        <p class="text-lg text-secondary dark:text-secondary leading-relaxed">
          Overview of the services offered.
        </p>
      </div>
    </section>

    <!-- 2. Services List Section -->
    <section class="flex items-center justify-center bg-surface dark:bg-surface-dark">
      <div class="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 class="text-3xl font-bold text-primary dark:text-primary-dark mb-8">What I Offer</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-bg dark:bg-bg-dark p-6 rounded-xl shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark transition-shadow duration-200">
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-2">Service 1</h3>
            <p class="text-secondary dark:text-secondary">Placeholder description.</p>
          </div>
          <div class="bg-bg dark:bg-bg-dark p-6 rounded-xl shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark transition-shadow duration-200">
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-2">Service 2</h3>
            <p class="text-secondary dark:text-secondary">Placeholder description.</p>
          </div>
          <div class="bg-bg dark:bg-bg-dark p-6 rounded-xl shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark transition-shadow duration-200">
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-2">Service 3</h3>
            <p class="text-secondary dark:text-secondary">Placeholder description.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Process Section -->
    <section class="flex items-center justify-center bg-bg dark:bg-bg-dark">
      <div class="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 class="text-3xl font-bold text-primary dark:text-primary-dark mb-8">My Process</h2>
        <p class="text-lg text-secondary dark:text-secondary mb-4">
          Description of the workflow or approach placeholder.
        </p>
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
