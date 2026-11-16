<template>
  <div class="flex flex-col min-h-screen">
    <!-- 1. Headline Section -->
    <section class="flex items-center justify-center bg-surface dark:bg-surface-dark border-b border-border-dark dark:border-border-dark">
      <div id="top" class="max-w-4xl mx-auto px-6 py-20">
        <h1 class="text-4xl md:text-5xl font-bold text-primary dark:text-primary-dark mb-4">
          Mein Angebot <br>
        </h1>
        <h2 class="text-4xl md:text-4xl">
          Klar - lösungsorientiert - wertschätzend. <br>
        </h2>

        <p class="text-lg text-secondary dark:text-secondary-dark leading-relaxed pt-5">
          Mein Coaching basiert auf einem systemisch-konstruktivistischen Ansatz. <br>
          Ich begleite Menschen dabei,
        </p>
        <ul class="text-lg p-5 px-10 list-disc mx-auto text-left">
          <li>neue Perspektiven zu entwickeln</li>
          <li>vorhandene Ressourcen sichtbar zu machen</li>
          <li>Klarheit über Ziele und Prioritäten zu gewinnen</li>
          <li>individuelle Lösungen zu erarbeiten</li>
        </ul>
        <p class="text-lg">
          Dabei verstehe ich mich als neutraler Sparringspartner.
          Nicht vorgefertigte Antworten stehen im Mittelpunkt,
          sondern tragfähige Lösungen,
          die zu Ihrer Persönlichkeit, Ihrer Rolle und Ihrer Situation passen.
        </p>
      </div>

      <div class="flex justify-center md:justify-end col-span-2">
        <div class=" w-80 h-96 bg-border dark:border-border-dark rounded-xl overflow-hidden">
          <img src="/images/Services.jpg" alt="Portrait" class="w-full h-full scale-[1] object-cover [object-position:50%_75%]" />
        </div>
      </div>
    </section>

    <!-- 2. Services List Section -->
    <section class="flex items-center justify-center bg-surface dark:bg-surface-dark border-b border-border-dark dark:border-border-dark">
      <div class="text-lg max-w-6xl mx-auto px-6 py-20 text-center">
        <!-- <h2 class="text-3xl font-bold text-primary dark:text-primary-dark mb-8">Was ich ihnen anbiete:</h2> -->
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white dark:bg-bg-dark p-6 rounded-xl shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark transition-shadow duration-200">
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-2">Führungskräfte-Coaching</h3>
            <p class="text-secondary dark:text-secondary-dark">
              Unterstützung bei:
            </p>
            <ul class="p-5 list-disc mx-auto max-w-fit text-left">
              <li>Übernahme neuer Führungsverantwortung</li>
              <li>Entwicklung eines authentischen Führungsstils</li>
              <li>Vorbereitung schwieriger Gespräche</li>
              <li>Entscheidungsfindung in komplexen Situationen</li>
              <li>Umgang mit Konflikten und Spannungen</li>
              <li>Veränderungs- und Transformationsprozessen</li>
              <li>Resilienz und gesunder Selbstführung</li>
            </ul>
          </div>
          <div class="bg-white dark:bg-bg-dark p-6 rounded-xl shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark transition-shadow duration-200">
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-2">Leadership & Organisationsentwicklung</h3>
            <p class="text-secondary dark:text-secondary-dark">
              Gemeinsam gestalten wir:
            </p>
            <ul class="p-5 list-disc mx-auto max-w-fit text-left">
              <li>Moderne Führungskulturen</li>
              <li>Wirksame Zusammenarbeit</li>
              <li>Nachhaltige Veränderungsprozesse</li>
              <li>Vertrauens- und Feedbackkultur</li>
              <li>Entwicklung von Führungsteams</li>
              <li>Stärkung von Selbstverantwortung</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Process Section -->
    <section class="flex items-center justify-center bg-bg dark:bg-bg-dark">
      <div class="max-w-4xl mx-auto px-6 py-20 text-left">
        <h2 class="text-3xl font-bold text-center text-primary dark:text-primary-dark mb-8">Grober Ablauf des Coachings</h2>
        <div class="text-lg space-y-2">
          <!-- Step 1 -->
          <div class="relative flex items-start gap-6 p-1 rounded-lg bg-surface dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
            <div class="flex-1 pt-1">
              <h3 class="text-xl font-semibold text-primary dark:text-primary-dark">1. Standortbestimmung</h3>
              <p class="text-lg text-secondary dark:text-secondary-dark mt-1 leading-relaxed">
                Wo stehen Sie aktuell? Welche Herausforderungen beschäftigen Sie?
              </p>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="relative flex items-start gap-6 p-1 rounded-lg bg-surface dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
            <div class="flex-1 pt-1">
              <h3 class="text-xl font-semibold text-primary dark:text-primary-dark">2. Zielklärung</h3>
              <p class="text-lg text-secondary dark:text-secondary-dark mt-1 leading-relaxed">
                Worum soll es konkret gehen? Welche Ergebnisse möchten Sie erreichen?
              </p>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="relative flex items-start gap-6 p-1 rounded-lg bg-surface dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
            <div class="flex-1 pt-1">
              <h3 class="text-xl font-semibold text-primary dark:text-primary-dark">3. Reflexion & Entwicklung</h3>
              <p class="text-lg text-secondary dark:text-secondary-dark mt-1 leading-relaxed">
                Gemeinsame Analyse, Perspektivenwechsel und Entwicklung neuer Handlungsmöglichkeiten.
              </p>
            </div>
          </div>

          <!-- Step 4 -->
          <div class="relative flex items-start gap-6 p-1 rounded-lg bg-surface dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
            <div class="flex-1 pt-1">
              <h3 class="text-xl font-semibold text-primary dark:text-primary-dark">4. Umsetzung</h3>
              <p class="text-lg text-secondary dark:text-secondary-dark mt-1 leading-relaxed">
                Transfer in die Praxis und konkrete Begleitung im Führungsalltag.
              </p>
            </div>
          </div>

          <!-- Step 5 -->
          <div class="relative flex items-start gap-6 p-1 rounded-lg bg-surface dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
            <div class="flex-1 pt-1">
              <h3 class="text-xl font-semibold text-primary dark:text-primary-dark">5. Nachhaltige Verankerung</h3>
              <p class="text-lg text-secondary dark:text-secondary-dark mt-1 leading-relaxed">
                Sicherung der Entwicklung und Vorbereitung zukünftiger Herausforderungen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="text-center py-6 text-secondary dark:text-secondary-dark text-sm border-t border-border dark:border-border-dark">
      <p>&copy; {{ currentYear }} Christian Peinbauer. Alle Rechte vorbehalten.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
