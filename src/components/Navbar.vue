<template>
  <nav class="bg-white dark:bg-surface-dark border-b border-border dark:border-border-dark sticky top-0 z-50 transition-colors duration-300">
    <div class="flex items-center justify-center px-6 py-4">
      <div class="flex items-center gap-8">
        <router-link
          to="/"
          class="text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-[-13px] after:left-0 after:h-[2px] after:bg-accent after:transition-all after:duration-200 after:content-[''] hover:text-accent"
          :class="$route.path === '/' ? 'text-accent after:w-full' : 'text-secondary dark:text-secondary-dark after:w-0 hover:after:w-full'"
        >
          Home
        </router-link>
        <router-link
          to="/about"
          class="text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-[-13px] after:left-0 after:h-[2px] after:bg-accent after:transition-all after:duration-200 after:content-[''] hover:text-accent"
          :class="$route.path === '/about' ? 'text-accent after:w-full' : 'text-secondary dark:text-secondary-dark after:w-0 hover:after:w-full'"
        >
          Über mich
        </router-link>
        <router-link
          to="/services"
          class="text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-[-13px] after:left-0 after:h-[2px] after:bg-accent after:transition-all after:duration-200 after:content-[''] hover:text-accent"
          :class="$route.path === '/services' ? 'text-accent after:w-full' : 'text-secondary dark:text-secondary-dark after:w-0 hover:after:w-full'"
        >
          Angebot
        </router-link>
        <router-link
          to="/contact"
          class="text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-[-13px] after:left-0 after:h-[2px] after:bg-accent after:transition-all after:duration-200 after:content-[''] hover:text-accent"
          :class="$route.path === '/contact' ? 'text-accent after:w-full' : 'text-secondary dark:text-secondary-dark after:w-0 hover:after:w-full'"
        >
          Kontakt
        </router-link>
        <button
          @click="$emit('toggle')"
          class="ml-4 p-2 rounded-lg transition-colors duration-200 hover:bg-surfaceHover dark:hover:bg-surfaceHover-dark"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          title="Toggle dark/light mode"
        >
          <!-- Sun icon (shown in dark mode) -->
          <svg v-if="isDark" class="w-5 h-5 text-primary dark:text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <!-- Moon icon (shown in light mode) -->
          <svg v-else class="w-5 h-5 text-primary dark:text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  isDark: boolean
}>()

defineEmits<{
  toggle: []
}>()
</script>
