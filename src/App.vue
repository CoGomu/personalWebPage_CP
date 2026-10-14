<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import { useDarkMode } from './composables/useDarkMode'

const { isDark, toggleDarkMode } = useDarkMode()
</script>

<template>
  <div class="h-screen flex flex-col bg-bg text-primary dark:bg-bg-dark dark:text-primary-dark transition-colors duration-300">
    <Navbar :is-dark="isDark" @toggle="toggleDarkMode" />

    <div class="flex-1 min-h-0 overflow-y-auto">
      <div class="w-full max-w-7xl mx-auto px-6 min-h-full flex flex-col">
        <RouterView />
      </div>
    </div>
  </div>
</template>