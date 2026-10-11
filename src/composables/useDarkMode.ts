import { ref, onMounted, watch } from 'vue'

export function useDarkMode() {
  const isDark = ref(false)

  const toggleDarkMode = () => {
    isDark.value = !isDark.value
    updateDarkClass()
    localStorage.setItem('darkMode', String(isDark.value))
  }

  const setDark = (value: boolean) => {
    isDark.value = value
    updateDarkClass()
    localStorage.setItem('darkMode', String(isDark.value))
  }

  const updateDarkClass = () => {
    if (typeof document !== 'undefined') {
      if (isDark.value) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }

  onMounted(() => {
    // Default to light mode, check localStorage first
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode !== null) {
      isDark.value = savedMode === 'true'
    }
    // Otherwise, default to light mode (isDark = false)
    updateDarkClass()
  })

  // Watch for localStorage changes
  watch(isDark, () => {
    localStorage.setItem('darkMode', String(isDark.value))
  })

  // Listen for storage events (cross-tab sync)
  if (typeof window !== 'undefined') {
    window.addEventListener('storage', (e) => {
      if (e.key === 'darkMode') {
        isDark.value = e.newValue === 'true'
        updateDarkClass()
      }
    })
  }

  return {
    isDark,
    toggleDarkMode,
    setDark,
    updateDarkClass,
  }
}
