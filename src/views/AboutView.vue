<template>
  <div class="flex flex-col min-h-screen">
    <!-- 1. Introduction Section -->
    <section class="flex items-center justify-center bg-gradient-to-br from-bg to-surface">
      <div class="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-primary mb-6">About</h1>
        <p class="text-lg text-secondary leading-relaxed">
          Short introduction placeholder. Add your personal bio and professional overview here.
        </p>
      </div>
    </section>

    <!-- 2. Professional Background Section -->
    <section class="flex items-center justify-center bg-surface">
      <div class="max-w-4xl mx-auto px-6 py-20">
        <h2 class="text-3xl font-bold text-primary mb-8 text-center">Professional Background</h2>
        <div class="space-y-6">
          <div class="bg-bg p-6 rounded-xl shadow-card">
            <h3 class="text-xl font-semibold text-primary mb-2">Position / Company</h3>
            <p class="text-accent text-sm mb-2">2020 - Present</p>
            <p class="text-secondary">Description of your role and responsibilities placeholder.</p>
          </div>
          <div class="bg-bg p-6 rounded-xl shadow-card">
            <h3 class="text-xl font-semibold text-primary mb-2">Previous Position / Company</h3>
            <p class="text-accent text-sm mb-2">2015 - 2020</p>
            <p class="text-secondary">Description of your role and responsibilities placeholder.</p>
          </div>
          <div class="bg-bg p-6 rounded-xl shadow-card">
            <h3 class="text-xl font-semibold text-primary mb-2">Earlier Experience</h3>
            <p class="text-accent text-sm mb-2">2010 - 2015</p>
            <p class="text-secondary">Description of your role and responsibilities placeholder.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Qualifications Section -->
    <section class="flex items-center justify-center bg-bg">
      <div class="max-w-4xl mx-auto px-6 py-20">
        <h2 class="text-3xl font-bold text-primary mb-8 text-center">Qualifications</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-surface p-6 rounded-xl shadow-card hover:shadow-cardHover transition-shadow duration-200">
            <h3 class="text-xl font-semibold text-primary mb-2">Degree / Certification 1</h3>
            <p class="text-accent text-sm mb-2">Institution Name</p>
            <p class="text-secondary">Details about your qualification placeholder.</p>
          </div>
          <div class="bg-surface p-6 rounded-xl shadow-card hover:shadow-cardHover transition-shadow duration-200">
            <h3 class="text-xl font-semibold text-primary mb-2">Degree / Certification 2</h3>
            <p class="text-accent text-sm mb-2">Institution Name</p>
            <p class="text-secondary">Details about your qualification placeholder.</p>
          </div>
          <div class="bg-surface p-6 rounded-xl shadow-card hover:shadow-cardHover transition-shadow duration-200">
            <h3 class="text-xl font-semibold text-primary mb-2">Degree / Certification 3</h3>
            <p class="text-accent text-sm mb-2">Institution Name</p>
            <p class="text-secondary">Details about your qualification placeholder.</p>
          </div>
          <div class="bg-surface p-6 rounded-xl shadow-card hover:shadow-cardHover transition-shadow duration-200">
            <h3 class="text-xl font-semibold text-primary mb-2">Degree / Certification 4</h3>
            <p class="text-accent text-sm mb-2">Institution Name</p>
            <p class="text-secondary">Details about your qualification placeholder.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Publications Section -->
    <section class="flex items-center justify-center bg-surface">
      <div class="max-w-4xl mx-auto px-6 py-20">
        <h2 class="text-3xl font-bold text-primary mb-8 text-center">Publications</h2>
        <div class="space-y-6">
          <div class="border-l-4 border-accent pl-6 py-2">
            <h3 class="text-xl font-semibold text-primary mb-1">Publication Title 1</h3>
            <p class="text-accent text-sm mb-2">Journal / Conference Name, 2024</p>
            <p class="text-secondary">Brief description or abstract placeholder.</p>
          </div>
          <div class="border-l-4 border-accent pl-6 py-2">
            <h3 class="text-xl font-semibold text-primary mb-1">Publication Title 2</h3>
            <p class="text-accent text-sm mb-2">Journal / Conference Name, 2023</p>
            <p class="text-secondary">Brief description or abstract placeholder.</p>
          </div>
          <div class="border-l-4 border-accent pl-6 py-2">
            <h3 class="text-xl font-semibold text-primary mb-1">Publication Title 3</h3>
            <p class="text-accent text-sm mb-2">Journal / Conference Name, 2022</p>
            <p class="text-secondary">Brief description or abstract placeholder.</p>
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
