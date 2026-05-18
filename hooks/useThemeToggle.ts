import { useEffect, useState, useCallback } from 'react'

export function useThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check localStorage for saved preference
    const savedTheme = localStorage.getItem('navbar-theme')
    if (savedTheme === 'dark') {
      setIsDark(true)
      document.documentElement.classList.add('bg-dark-theme')
    } else {
      document.documentElement.classList.remove('bg-dark-theme')
    }
  }, [])

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const newValue = !prev
      localStorage.setItem('navbar-theme', newValue ? 'dark' : 'light')
      if (newValue) {
        document.documentElement.classList.add('bg-dark-theme')
      } else {
        document.documentElement.classList.remove('bg-dark-theme')
      }
      return newValue
    })
  }, [])

  return { isDark, mounted, toggleTheme }
}
