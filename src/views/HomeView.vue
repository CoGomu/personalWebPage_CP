<template>
  <div class="flex flex-col min-h-screen">
    <!-- 1. Hero Section -->
    <section class="flex items-center justify-center bg-gradient-to-br from-bg to-surface">
      <div class="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div class="text-center md:text-left">
          <h1 class="text-4xl md:text-5xl font-bold text-primary mb-4">Hero Title</h1>
          <p class="text-lg text-secondary">Hero subtitle placeholder.</p>
        </div>
        <div class="flex justify-center md:justify-end">
          <div class="w-72 h-96 bg-border rounded-xl overflow-hidden">
            <img src="/images/hero-portrait.jpg" alt="Hero portrait" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Metaphor Section -->
    <section class="flex items-center justify-center bg-surface">
      <div class="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 class="text-3xl font-bold text-primary mb-4">Metaphor</h2>
        <p class="text-lg text-secondary">Metaphor content placeholder.</p>
      </div>
    </section>

    <!-- 3. Offering Section -->
    <section class="flex items-center justify-center bg-bg">
      <div class="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 class="text-3xl font-bold text-primary mb-8">Offering</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-surface p-6 rounded-xl shadow-card hover:shadow-cardHover transition-shadow duration-200">
            <h3 class="text-xl font-semibold text-primary mb-2">Service 1</h3>
            <p class="text-secondary">Placeholder description.</p>
          </div>
          <div class="bg-surface p-6 rounded-xl shadow-card hover:shadow-cardHover transition-shadow duration-200">
            <h3 class="text-xl font-semibold text-primary mb-2">Service 2</h3>
            <p class="text-secondary">Placeholder description.</p>
          </div>
          <div class="bg-surface p-6 rounded-xl shadow-card hover:shadow-cardHover transition-shadow duration-200">
            <h3 class="text-xl font-semibold text-primary mb-2">Service 3</h3>
            <p class="text-secondary">Placeholder description.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Why Section -->
    <section class="flex items-center justify-center bg-surface">
      <div class="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 class="text-3xl font-bold text-primary mb-4">Why</h2>
        <p class="text-lg text-secondary">Why content placeholder.</p>
      </div>
    </section>

    <!-- 5. Call to Action Section -->
    <section class="flex items-center justify-center bg-gradient-to-br from-accent to-accentHover">
      <div class="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Call to Action</h2>
        <p class="text-lg text-white/80 mb-8">CTA description placeholder.</p>
        <router-link
          to="/contact"
          class="inline-block px-8 py-3 bg-white text-accent font-medium rounded-lg hover:bg-surface transition-colors duration-200 shadow-card"
        >
          Get in Touch
        </router-link>
      </div>
    </section>

    <!-- Footer -->
    <footer class="text-center py-6 text-secondary text-sm border-t border-border">
      <p>&copy; {{ currentYear }} PAP. Alle Rechte vorbehalten.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
