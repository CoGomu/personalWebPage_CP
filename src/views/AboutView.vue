<template>
  <div class="flex flex-col min-h-screen">
    <!-- 1. Introduction Section -->
    <section class="flex items-center justify-center bg-gradient-light dark:bg-gradient-dark">
      <div class="max-w-6xl mx-auto px-6 py-20">
        <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <!-- Text Content (Left) -->
          <div class="flex-1 text-center md:text-left">
            <h1 class="text-4xl md:text-5xl font-bold text-primary dark:text-primary-dark mb-6">Über mich</h1>
            <p class="font-bold text-lg text-secondary dark:text-secondary leading-relaxed mb-4">Mag. Christian Peinbauer</p>
            <p class="text-lg text-secondary dark:text-secondary leading-relaxed">
              Mein beruflicher Weg verbindet mehr als drei Jahrzehnte Erfahrung in Führung,
              Gesundheitswesen, Ausbildung und Organisationsentwicklung.
              Die Arbeit mit Menschen bildet seit Beginn meines Berufslebens den Mittelpunkt meines
              Handelns.
              Ich habe erlebt, wie Führung Motivation entstehen lassen kann. Und wie fehlende Orientierung
              Unsicherheit erzeugt.
              Diese Erfahrungen prägen heute meine Arbeit als Coach.
              Mein Anliegen ist es, Führungskräfte dabei zu unterstützen, ihre eigene Wirksamkeit zu entfalten,
              Potenziale zu erkennen und Menschen erfolgreich durch Veränderung zu begleiten.
            </p>
          </div>
          <!-- Image Placeholder (Right) -->
          <div class="flex-shrink-0 w-full md:w-1/3 aspect-square max-w-md">
            <div class="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
              <div class="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400 dark:text-gray-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p class="text-gray-500 dark:text-gray-400 text-sm">Bild hier einfügen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Professional Background Section -->
    <section class="flex items-center justify-center bg-surface dark:bg-surface-dark">
      <div class="max-w-4xl mx-auto px-6 py-20">
        <h2 class="text-3xl font-bold text-primary dark:text-primary-dark mb-8 text-center">KURZVITA</h2>
        <div class="space-y-6">
          <div class="bg-bg dark:bg-bg-dark p-6 rounded-xl shadow-card dark:shadow-card-dark">
            <p class="text-accent text-sm font-semibold mb-2">2012-2026</p>
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-2">Direktor der OÖ Gesundheits- und Krankenpflegeschulen Freistadt, Rohrbach und Schärding.</h3>
            <p class="text-secondary dark:text-secondary">Gesamtverantwortung für Strategie, Personal, Organisation und Weiterentwicklung der Ausbildungsstandorte.</p>
          </div>
          <div class="bg-bg dark:bg-bg-dark p-6 rounded-xl shadow-card dark:shadow-card-dark">
            <p class="text-accent text-sm font-semibold mb-2">2003 - 2012</p>
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-2">Ausbildungskoordinator der Akademie für Fach-, Weiter- und Sonderausbildungen am Krankenhaus der Barmherzigen Schwestern</h3>
            <p class="text-secondary dark:text-secondary">Description of your role and responsibilities placeholder.</p>
          </div>
          <div class="bg-bg dark:bg-bg-dark p-6 rounded-xl shadow-card dark:shadow-card-dark">
            <p class="text-accent text-sm font-semibold mb-2">1994 - 2002</p>
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-2">Stationsleitung und stellvertretende Stationsleitung einer operativen Intensivstation.</h3>
            <p class="text-secondary dark:text-secondary">Description of your role and responsibilities placeholder.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Qualifications Section -->
    <section class="flex items-center justify-center bg-bg dark:bg-bg-dark">
      <div class="max-w-4xl mx-auto px-6 py-20">
        <h2 class="text-3xl font-bold text-primary dark:text-primary-dark mb-8 text-center">Qualifikationen</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-surface dark:bg-surface-dark p-6 rounded-xl shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark transition-shadow duration-200">
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-2">Magister Pflegewissenschaft</h3>
            <p class="text-accent text-sm mb-2">UMIT</p>
            <p class="text-secondary dark:text-secondary">Schwerpunkt Pädagogik</p>
          </div>
          <div class="bg-surface dark:bg-surface-dark p-6 rounded-xl shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark transition-shadow duration-200">
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-2">Universitätslehrgang für leitendes Pflegepersonal</h3>
            <p class="text-accent text-sm mb-2">JKU</p>
            <p class="text-secondary dark:text-secondary">Details</p>
          </div>
          <div class="bg-surface dark:bg-surface-dark p-6 rounded-xl shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark transition-shadow duration-200">
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-2">Universitätslehrgang für lehrendes Pflegepersonal</h3>
            <p class="text-accent text-sm mb-2">JKU</p>
            <p class="text-secondary dark:text-secondary">Details</p>
          </div>
          <div class="bg-surface dark:bg-surface-dark p-6 rounded-xl shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark transition-shadow duration-200">
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-2">Sonderausbildung Intensivpflege</h3>
            <p class="text-accent text-sm mb-2">Institution Name</p>
            <p class="text-secondary dark:text-secondary">Details</p>
          </div>
          <div class="bg-surface dark:bg-surface-dark p-6 rounded-xl shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark transition-shadow duration-200">
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-2">Ausbildung Gewaltfreie Kommunikation</h3>
            <p class="text-accent text-sm mb-2">Institution Name</p>
            <p class="text-secondary dark:text-secondary">Details</p>
          </div>
          <div class="bg-surface dark:bg-surface-dark p-6 rounded-xl shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark transition-shadow duration-200">
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-2">Ausbildung Gewaltfreie Kommunikation</h3>
            <p class="text-accent text-sm mb-2">TODO ... Akademie</p>
            <p class="text-secondary dark:text-secondary">Details</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Publications Section -->
    <section class="flex items-center justify-center bg-surface dark:bg-surface-dark">
      <div class="max-w-4xl mx-auto px-6 py-20">
        <h2 class="text-3xl font-bold text-primary dark:text-primary-dark mb-8 text-center">Publikationen</h2>
        <div class="space-y-6">
          <div class="border-l-4 border-accent pl-6 py-2">
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-1">Standards der Intensivpflege</h3>
            <p class="text-accent text-sm mb-2">Springer Verlag,  1998</p>
            <p class="text-secondary dark:text-secondary">
              <a href="https://link.springer.com/book/10.1007/978-3-7091-6459-4">https://link.springer.com/book/10.1007/978-3-7091-6459-4</a>
            </p>
          </div>
          <div class="border-l-4 border-accent pl-6 py-2">
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-1">Schulung und Coaching in der Gesundheits- und Krankenpflege</h3>
            <p class="text-accent text-sm mb-2">Springer Verlag, 2003</p>
            <p class="text-secondary dark:text-secondary">
              <a href="https://link.springer.com/book/10.1007/978-3-7091-6031-2">https://link.springer.com/book/10.1007/978-3-7091-6031-2</a>
            </p>
          </div>
        </div>
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
