<template>
  <footer class="bg-surface dark:bg-surface-dark border-t border-border dark:border-border-dark transition-colors duration-300">
    <div class="max-w-6xl mx-auto px-6 py-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <!-- Left: Copyright -->
        <div class="text-sm text-secondary dark:text-secondary-dark">
          <p>&copy; {{ currentYear }} Mag. Christian Peinbauer. Alle Rechte vorbehalten.</p>
        </div>

        <!-- Center: Impressum Link -->
        <div class="flex items-center gap-6 flex-wrap justify-center">
          <router-link
            to="/impressum"
            class="text-sm font-medium transition-colors duration-200 text-secondary dark:text-secondary-dark hover:text-accent dark:hover:text-accent"
          >
            Impressum & Datenschutz
          </router-link>
        </div>

        <!-- Right: Empty for balance -->
        <div class="w-32"></div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
