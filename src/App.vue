<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
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

function scrollToHash(hash: string) {
  nextTick(() => {
    const el = document.querySelector(hash)
    if (el && scrollContainer.value) {
      const targetTop = el.getBoundingClientRect().top + scrollContainer.value.scrollTop - scrollContainer.value.getBoundingClientRect().top
      scrollContainer.value.scrollTo({ top: targetTop, behavior: 'smooth' })
    }
  })
}

function switchView(path: string) {
  viewKey.value++
  scrollToTop()
}

watch(
  () => route.fullPath,
  (newPath) => {
    const hash = newPath.split('#')[1]
    if (hash) {
      scrollToHash(`#${hash}`)
    } else {
      scrollToTop()
    }
  }
)

onMounted(() => {
  scrollToTop()
})
</script>

<template>
  <div class="h-screen flex flex-col bg-bg text-primary dark:bg-bg-dark dark:text-primary-dark transition-colors duration-300 overflow-x-hidden">
    <Navbar :is-dark="isDark" @toggle="toggleDarkMode" />

    <div ref="scrollContainer" class="flex-1 min-h-0 overflow-y-auto">
      <div class="w-full max-w-7xl mx-auto px-6 min-h-full flex flex-col">
        <RouterView :key="viewKey" />
      </div>
    </div>

    <Footer />
  </div>
</template>