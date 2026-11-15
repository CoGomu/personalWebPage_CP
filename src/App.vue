<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { ref, computed, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import { useDarkMode } from './composables/useDarkMode'

const { isDark, toggleDarkMode } = useDarkMode()
const route = useRoute()
const scrollContainer = ref<HTMLElement | null>(null)
const viewKey = ref(0)

function scrollToTop() {
  if (scrollContainer.value) {
    scrollContainer.value.scrollTop = 0
  }
}

function switchView(path: string) {
  viewKey.value++
  scrollToTop()
}

onMounted(() => {
  scrollToTop()
})
</script>

<template>
  <div class="h-screen flex flex-col bg-bg text-primary dark:bg-bg-dark dark:text-primary-dark transition-colors duration-300">
    <Navbar :is-dark="isDark" @toggle="toggleDarkMode" />

    <div ref="scrollContainer" class="flex-1 min-h-0 overflow-y-auto">
      <div class="w-full max-w-7xl mx-auto px-6 min-h-full flex flex-col">
        <RouterView :key="viewKey" />
      </div>
    </div>
  </div>
</template>