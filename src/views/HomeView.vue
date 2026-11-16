<template>
  <div class="flex flex-col min-h-screen">
    <!-- 1. Hero Section -->
    <section class="flex items-center justify-center bg-surface dark:bg-surface-dark">
      <div class="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-5 items-center">
        <div class="text-center md:text-left col-span-3">
          <p class="text-lg text-secondary dark:text-secondary-dark mb-4">
            Führungskräfte stehen täglich vor anspruchsvollen Entscheidungen, komplexen Situationen und
            herausfordernden Gesprächen. Erfolg entsteht nicht auf perfekten Wegen, sondern im bewussten
            Umgang mit Steigungen, Kurven und Gegenwind.
            Ich begleite Führungskräfte dabei, Klarheit zu gewinnen, wirksam zu handeln und ihren eigenen
            Führungsstil weiterzuentwickeln.
          </p>
          <h1 class="text-2xl md:text-2xl font-bold text-primary dark:text-primary-dark mb-4">
            "Führung bedeutet nicht, den Weg zu ebnen. <br>
            Sondern zu antizipieren und zu entscheiden, mit welchem Rhythmus man ihn fährt."
          </h1>
        </div>
        <div class="flex justify-center md:justify-end col-span-2">
          <div class=" w-80 h-96 bg-border dark:border-border-dark rounded-xl overflow-hidden">
            <img src="/images/hero-portrait.jpg" alt="Hero portrait" class="w-full h-full scale-[1.3] object-cover [object-position:50%_75%]" />
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Metaphor Section -->
    <section class="flex items-center justify-center bg-surface dark:bg-surface-dark">
      <div class="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 class="text-3xl font-bold text-primary dark:text-primary-dark mb-4">Führen wie auf einem anspruchsvollen Bergweg</h2>
        <p class="text-lg text-secondary dark:text-secondary-dark mb-4 ">
          Das Bild zeigt einen anspruchsvollen Weg entlang einer Felswand*. Der Untergrund ist uneben,
          die Strecke verlangt Konzentration, Ausdauer und die Fähigkeit, sich laufend auf neue
          Situationen einzustellen.
          Genau so erleben viele Führungskräfte ihren Arbeitsalltag.
          Nicht jeder Abschnitt lässt sich planen. Manche Entscheidungen müssen unter Druck getroffen
          werden. Herausforderungen tauchen unerwartet auf. Neue Verantwortungen verlangen
          Orientierung.
          Wir können den Weg nicht immer verändern. Aber wir können entscheiden, wie wir ihn
          fahren.
          Erfolgreiche Führung bedeutet:
        </p>
        <ul class="pb-5 list-disc mx-auto max-w-fit">
          <li>den Überblick zu behalten</li>
          <li>mit Unsicherheit konstruktiv umzugehen</li>
          <li>die eigene Energie gezielt einzusetzen</li>
          <li>Menschen mitzunehmen</li>
          <li>auch in anspruchsvollen Situationen handlungsfähig zu bleiben</li>
        </ul>
        <p>
          Coaching schafft den Raum, den eigenen Kurs zu reflektieren und den persönlichen
          Führungsrhythmus zu finden.
        </p>
        <div class="p-5">
          <router-link
            to="/services#top"
            class="inline-block px-8 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors duration-200 shadow-card dark:shadow-card-dark"
          >
            Zu meinem Angebot
          </router-link>
        </div>
      </div>
    </section>

    <!-- 3. Offering Section
    <section class="flex items-center justify-center bg-bg dark:bg-bg-dark">
      <div class="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 class="text-3xl font-bold text-primary dark:text-primary-dark mb-8">Führung entwickeln. Menschen stärken. Wirkung entfalten.</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-surface dark:bg-surface-dark p-6 rounded-xl shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark transition-shadow duration-200">
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
          <div class="bg-surface dark:bg-surface-dark p-6 rounded-xl shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark transition-shadow duration-200">
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
          <div class="bg-surface dark:bg-surface-dark p-6 rounded-xl shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark transition-shadow duration-200">
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
    -->

    <!-- 4. Why Section 
    <section class="flex items-center justify-center bg-surface dark:bg-surface-dark">
      <div class="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 class="text-3xl font-bold text-primary dark:text-primary-dark mb-4">Why</h2>
        <p class="text-lg text-secondary dark:text-secondary">Why content placeholder.</p>
      </div>
    </section>
    -->

    <!-- 5. Call to Action Section 
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
    -->

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
