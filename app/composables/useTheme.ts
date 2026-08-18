import { ref, onMounted } from 'vue'

export type Theme = 'dark' | 'light'

export function useTheme() {
  const theme = ref<Theme>('dark')

  function applyTheme(newTheme: Theme) {
    theme.value = newTheme
    if (typeof window !== 'undefined') {
      const root = document.documentElement
      if (newTheme === 'dark') {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
      localStorage.setItem('enoch-theme', newTheme)
    }
  }

  function toggleTheme() {
    applyTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  onMounted(() => {
    const saved = localStorage.getItem('enoch-theme') as Theme | null
    if (saved === 'dark' || saved === 'light') {
      applyTheme(saved)
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      applyTheme(prefersDark ? 'dark' : 'light')
    }
  })

  return {
    theme,
    toggleTheme,
    applyTheme,
  }
}
