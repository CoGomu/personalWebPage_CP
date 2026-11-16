<template>
  <div class="flex min-h-full flex-col">
    <!-- Main Content -->
    <main class="flex-col flex-auto">
      <!-- 1. Headline Section -->
      <section class="flex items-center justify-center bg-surface dark:bg-surface-dark border-b border-border-dark dark:border-border-dark">
        <div class="max-w-4xl mx-auto px-6 py-12">
          <div class="flex-1 text-center md:text-left">
            <h1 class="text-4xl md:text-5xl font-bold text-primary dark:text-primary-dark mb-4">

              Kontakt
            </h1>
            <p class="text-lg text-secondary dark:text-secondary-dark leading-relaxed">
              Sie stehen vor einer wichtigen Führungsentscheidung, einer Veränderung oder möchten Ihre
              Führungskompetenz gezielt weiterentwickeln?
            </p>
            <p class="text-lg text-secondary dark:text-secondary-dark leading-relaxed">
              Ich freue mich auf ein persönliches Kennenlernen.
              Lassen Sie uns ins Gespräch kommen!
            </p>

          </div>
        </div>

        <div class="p-10 flex justify-center md:justify-end col-span-2">
          <div class=" w-80 h-96 bg-border dark:border-border-dark rounded-xl overflow-hidden">
            <img src="/images/Contact.jpg" alt="Portrait" class="w-full h-full scale-[1] object-cover [object-position:50%_75%]" />
          </div>
        </div>
      </section>

      <!-- 2. Contact Details Section -->
      <section class="flex items-start justify-center bg-surface dark:bg-surface-dark">
      <div class="max-w-2xl mx-auto px-6 py-12 text-center">
        <h2 class="text-2xl font-bold text-primary dark:text-primary-dark mb-10">Kontakt Informationen:</h2>
        <div class="bg-white dark:bg-bg-dark p-5 rounded-xl shadow-card dark:shadow-card-dark text-left">
          <h3 class="text-xl font-bold text-primary dark:text-primary-dark mb-4">Mag. Christian Peinbauer</h3>
          <div class="space-y-3 text-secondary dark:text-secondary-dark">
            <p>
              <span class="font-medium text-primary dark:text-primary-dark">Email:</span>
              <a href="mailto:christian.peinbauer@gmx.at" class="text-accent hover:text-accent-hover transition-colors duration-200 ml-2">
                christian.peinbauer@gmx.at
              </a>
            </p>
            <p>
              <span class="font-medium text-primary dark:text-primary-dark">Phone:</span>
              <a href="tel:+436643130835" class="text-accent hover:text-accent-hover transition-colors duration-200 ml-2">
                +43 664 3130835
              </a>
            </p>
          </div>
        </div>
      </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="mt-auto text-center py-6 text-secondary dark:text-secondary-dark text-sm border-t border-border dark:border-border-dark bg-surface dark:bg-surface-dark">
      <p>&copy; {{ currentYear }} Christian Peinbauer. Alle Rechte vorbehalten.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
