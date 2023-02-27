import { useContext, useEffect } from 'react'
import { LOCALSTORAGE_THEM_KEY, Theme, ThemeContext } from './ThemeContext'

interface UseTheme {
  theme: Theme
  toggleTheme: () => void
}

export const useTheme = (): UseTheme => {
  const { theme, setTheme } = useContext(ThemeContext)

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const toggleTheme = (): void => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme(newTheme)
    document.body.className = newTheme
    localStorage.setItem(LOCALSTORAGE_THEM_KEY, newTheme)
  }

  return { theme, toggleTheme }
}
