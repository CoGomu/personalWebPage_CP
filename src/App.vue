<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import { useDarkMode } from './composables/useDarkMode'

const { isDark, toggleDarkMode } = useDarkMode()
</script>

<template>
  <div class="min-h-screen flex flex-col bg-bg text-primary dark:bg-bg-dark dark:text-primary-dark transition-colors duration-300">
    <Navbar :is-dark="isDark" @toggle="toggleDarkMode"></Navbar>
    <div class="flex flex-grow justify-center">
      <div class="w-full max-w-7xl px-6">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
