<template>
  <div class="flex flex-col min-h-screen">
    <!-- 1. Headline Section -->
    <section class="flex items-center justify-center bg-gradient-to-br from-bg to-surface">
      <div class="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-primary mb-4">Get in Touch</h1>
        <p class="text-lg text-secondary leading-relaxed">
          Feel free to reach out. I look forward to hearing from you.
        </p>
      </div>
    </section>

    <!-- 2. Contact Details Section -->
    <section class="flex items-center justify-center bg-surface">
      <div class="max-w-2xl mx-auto px-6 py-20 text-center">
        <h2 class="text-2xl font-bold text-primary mb-10">Contact Information</h2>
        <div class="bg-bg p-8 rounded-xl shadow-card text-left">
          <h3 class="text-xl font-bold text-primary mb-4">Your Full Name</h3>
          <div class="space-y-3 text-secondary">
            <p>
              <span class="font-medium text-primary">Email:</span>
              <a href="mailto:example@mail.com" class="text-accent hover:text-accentHover transition-colors duration-200 ml-2">
                example@mail.com
              </a>
            </p>
            <p>
              <span class="font-medium text-primary">Phone:</span>
              <a href="tel:+1234567890" class="text-accent hover:text-accentHover transition-colors duration-200 ml-2">
                +1 234 567 890
              </a>
            </p>
          </div>
        </div>
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
