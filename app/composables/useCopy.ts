import { ref } from 'vue'

export function useCopy(timeout = 2000) {
  const copied = ref(false)

  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text)
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, timeout)
      return true
    } catch {
      copied.value = false
      return false
    }
  }

  return {
    copied,
    copy,
  }
}
