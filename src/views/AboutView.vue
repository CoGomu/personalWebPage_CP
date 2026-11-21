<template>
  <div class="flex flex-col min-h-screen">
    <!-- 1. Introduction Section -->
    <section class="flex items-center justify-center bg-surface dark:bg-surface-dark border-b border-border dark:border-border-dark">
      <div class="max-w-6xl mx-auto px-6 py-20">
        <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <!-- Text Content (Left) -->
          <div class="flex-1 text-left md:text-left">
            <h1 class="text-4xl md:text-5xl font-bold text-primary dark:text-primary-dark mb-6">Über mich</h1>
            <p class="font-bold  text-lg text-secondary dark:text-secondary-dark leading-relaxed mb-4">Mag. Christian Peinbauer</p>
            <p class="text-lg text-secondary dark:text-secondary-dark leading-relaxed">
              Mein beruflicher Weg verbindet mehr als vier Jahrzehnte Erfahrung im Gesundheitswesen, in der Führung,
              in der Ausbildung und Organisationsentwicklung.
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

          <div class="flex justify-center md:justify-end col-span-2">
            <div class=" w-80 h-96 bg-border dark:border-border-dark rounded-xl overflow-hidden">
              <img src="/images/About.jpg" alt="Hero portrait" class="w-full h-full scale-[1] object-cover [object-position:50%_75%]" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Professional Background Section -->
    <section class="flex items-center justify-center bg-surface dark:bg-surface-dark border-b border-border dark:border-border-dark">
      <div class="max-w-4xl mx-auto px-6 py-20">
        <h2 class="text-3xl font-bold text-primary dark:text-primary-dark mb-8 text-center">KURZVITA</h2>
        <div class="space-y-6">
          <div class="bg-white dark:bg-bg-dark p-6 rounded-xl shadow-card dark:shadow-card-dark">
            <p class="text-accent text-sm font-semibold mb-2">2012-2026</p>
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-2">Direktor der OÖG Gesundheits- und Krankenpflegeschulen Freistadt, Rohrbach und Schärding.</h3>
            <ul class="list-disc list-outside pl-10">
              <li>Gesamtverantwortung für die strategische, organisatorische und personelle Führung von 3 Gesundheits- und Krankenpflegeschulen </li>
              <li>Sicherstellung der Ausbildungsqualität und Weiterentwicklung der Curricula</li>
              <li>Führung und Entwicklung von Lehr- und Verwaltungspersonal</li>
              <li>Erstellen und Kontrolle des Budgets und der Stellenpläne der einzelnen Schulen im Verbund</li>
            </ul>
          </div>
          <div class="bg-white dark:bg-bg-dark p-6 rounded-xl shadow-card dark:shadow-card-dark">
            <p class="text-accent text-sm font-semibold mb-2">2003 - 2012</p>
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-2">Ausbildungskoordinator der Akademie für Fach-, Weiter- und Sonderausbildungen am Krankenhaus der Barmherzigen Schwestern Linz</h3>
            <ul class="list-disc list-outside pl-10">
              <li>Planung, Organisation und Koordination von Fach- und Sonderausbildungen</li>
              <li>Entwicklung von Ausbildungskonzepten und Qualitätsstandards</li>
              <li>Lehr- und Vortragstätigkeit im Bereich Pflege, Management und Fehlermanagement</li>
            </ul>
          </div>
          <div class="bg-white dark:bg-bg-dark p-6 rounded-xl shadow-card dark:shadow-card-dark">
            <p class="text-accent text-sm font-semibold mb-2">1994 - 2002</p>
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-2">Stationsleitung und stellvertretende Stationsleitung and der operativen Intensivstation Bamherzige Schwestern Linz</h3>
            <ul class="list-disc list-outside pl-10">
              <li>Fachliche und organisatorische Leitung einer operativen Intensivstation</li>
              <li>Personalführung, Dienstplanung und Qualitätssicherung</li>
              <li>Budgetverantwortung: Erstellung und Umsetzung des Budget</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Qualifications Section -->
    <section class="flex items-center justify-center bg-bg dark:bg-bg-dark border-b border-border dark:border-border-dark">
      <div class="max-w-4xl mx-auto px-6 py-20">
        <h2 class="text-3xl font-bold text-primary dark:text-primary-dark mb-8 text-center">Qualifikationen</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark transition-shadow duration-200">
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-2">Magister Pflegewissenschaft</h3>
            <p class="text-secondary dark:text-secondary-dark">Schwerpunkt Pädagogik</p>
            <p class="text-accent text-sm mb-2">UMIT</p>
          </div>
          <div class="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark transition-shadow duration-200">
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-2">Universitätslehrgang für leitendes Pflegepersonal</h3>
            <p class="text-accent text-sm mb-2">JKU</p>
          </div>
          <div class="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark transition-shadow duration-200">
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-2">Universitätslehrgang für lehrendes Pflegepersonal</h3>
            <p class="text-accent text-sm mb-2">JKU</p>
          </div>
          <div class="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark transition-shadow duration-200">
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-2">Bereichsleitungsausbildung - Homacon</h3>
            <p class="text-accent text-sm mb-2">KH Bamherzige Schwestern Linz</p>
          </div>
          <div class="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark transition-shadow duration-200">
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-2">Sonderausbildung für leitendes Pflegepersonal</h3>
            <p class="text-accent text-sm mb-2">Landesfrauen- und Kinderklinik Linz</p>
          </div>
          <div class="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark transition-shadow duration-200">
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-2">Sonderausbildung für Anästesie und Intensivpflege</h3>
            <p class="text-accent text-sm mb-2">AKH Linz</p>
          </div>
          <div class="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark transition-shadow duration-200">
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-2">Trainer für gewaltfreie Kommunikation - Marshall B. Rosenberg</h3>
            <p class="text-accent text-sm mb-2">Christan-Rüther Wien</p>
          </div>
          <div class="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark transition-shadow duration-200">
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-2">Lehrwart für Speedskating</h3>
            <p class="text-accent text-sm mb-2">Bundessportakademie Linz</p>
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
            <p class="text-secondary dark:text-secondary-dark">
              <a href="https://link.springer.com/book/10.1007/978-3-7091-6459-4">https://link.springer.com/book/10.1007/978-3-7091-6459-4</a>
            </p>
          </div>
          <div class="border-l-4 border-accent pl-6 py-2">
            <h3 class="text-xl font-semibold text-primary dark:text-primary-dark mb-1">Schulung und Coaching in der Gesundheits- und Krankenpflege</h3>
            <p class="text-accent text-sm mb-2">Springer Verlag, 2003</p>
            <p class="text-secondary dark:text-secondary-dark">
              <a href="https://link.springer.com/book/10.1007/978-3-7091-6031-2">https://link.springer.com/book/10.1007/978-3-7091-6031-2</a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <!-- <footer class="text-center py-6 text-secondary dark:text-secondary-dark text-sm">
      <p>&copy; {{ currentYear }} Christian Peinbauer. Alle Rechte vorbehalten.</p>
    </footer> -->
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
