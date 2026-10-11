<template>
  <div class="flex flex-col min-h-screen">
    <!-- 1. Headline Section -->
    <section class="flex items-center justify-center bg-gradient-light dark:bg-gradient-dark">
      <div class="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-primary dark:text-primary-dark mb-4">
          Mein Angebot <br>
          <h2 class="text-4xl md:text-4xl p-5">
            Klar. Wertschätzend. Lösungsorientiert. <br>
          </h2>

        </h1>
        <p class="text-lg text-secondary dark:text-secondary leading-relaxed">
          Mein Coaching basiert auf einem systemisch-konstruktivistischen Ansatz. <br>
          Ich begleite Menschen dabei,
          <ul class="p-5 list-disc mx-auto max-w-fit text-left">
            <li>neue Perspektiven zu entwickeln</li>
            <li>vorhandene Ressourcen sichtbar zu machen</li>
            <li>Klarheit über Ziele und Prioritäten zu gewinnen</li>
            <li>individuelle Lösungen zu erarbeiten</li>
          </ul>
          <p class="p-5">
            Dabei verstehe ich mich als neutraler Sparringspartner.
            Nicht vorgefertigte Antworten stehen im Mittelpunkt,
            sondern tragfähige Lösungen,
            die zu Ihrer Persönlichkeit, Ihrer Rolle und Ihrer Situation passen.
          </p>
        </p>
      </div>
    </section>

    <!-- 2. Services List Section -->
    <section class="flex items-center justify-center bg-surface dark:bg-surface-dark">
      <div class="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 class="text-3xl font-bold text-primary dark:text-primary-dark mb-8">Was ich ihnen anbiete:</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-bg dark:bg-bg-dark p-6 rounded-xl shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark transition-shadow duration-200">
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-2">Führungskräfte-Coaching</h3>
            <p class="text-secondary dark:text-secondary">
              Unterstützung bei:
              <ul class="p-5 list-disc mx-auto max-w-fit text-left">
                <li>Übernahme neuer Führungsverantwortung</li>
                <li>Entwicklung eines authentischen Führungsstils</li>
                <li>Vorbereitung schwieriger Gespräche</li>
                <li>Entscheidungsfindung in komplexen Situationen</li>
                <li>Umgang mit Konflikten und Spannungen</li>
                <li>Veränderungs- und Transformationsprozessen</li>
                <li>Resilienz und gesunder Selbstführung</li>
              </ul>
            </p>
          </div>
          <div class="bg-bg dark:bg-bg-dark p-6 rounded-xl shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark transition-shadow duration-200">
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-2">Leadership & Organisationsentwicklung</h3>
            <p class="text-secondary dark:text-secondary">
              Gemeinsam gestalten wir:
              <ul class="p-5 list-disc mx-auto max-w-fit text-left">
                <li>Moderne Führungskulturen</li>
                <li>Wirksame Zusammenarbeit</li>
                <li>Nachhaltige Veränderungsprozesse</li>
                <li>Vertrauens- und Feedbackkultur</li>
                <li>Entwicklung von Führungsteams</li>
                <li>Stärkung von Selbstverantwortung</li>
              </ul>
            </p>
          </div>
          <div class="bg-bg dark:bg-bg-dark p-6 rounded-xl shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark transition-shadow duration-200">
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-2">Persönliches Coaching</h3>
            <p class="text-secondary dark:text-secondary">
              Begleitung bei:
              <ul class="p-5 list-disc mx-auto max-w-fit text-left">
                <li>beruflicher Neuorientierung</li>
                <li>persönlichen Veränderungsprozessen</li>
                <li>Rollenklärung</li>
                <li>Work-Life-Balance</li>
                <li>Selbstreflexion und Potenzialentwicklung</li>
                <li>persönlichen Entscheidungssituationen</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Process Section -->
    <section class="flex items-center justify-center bg-bg dark:bg-bg-dark">
      <div class="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 class="text-3xl font-bold text-primary dark:text-primary-dark mb-8">Grober Ablauf des Coachings</h2>
        <p class="text-lg text-secondary dark:text-secondary mb-4">
          <ul class="p-5 list-decimal mx-auto max-w-fit text-left">
            <li>Standortbestimmung</li>
            <li>Zielklärung</li>
            <li>Reflexion & Entwicklung</li>
            <li>Umsetzung</li>
            <li>Nachhaltige Verankerung</li>
          </ul>
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
