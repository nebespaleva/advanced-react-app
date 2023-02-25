import { type FC, type ReactNode, useMemo, useState } from 'react'
import { ThemeContext, Theme, LOCALSTORAGE_THEM_KEY } from '../lib/ThemeContext'

const defaultTheme = localStorage.getItem(LOCALSTORAGE_THEM_KEY) as Theme || Theme.LIGHT

interface ThemeProviderProps {
  children: ReactNode
  initialTheme?: Theme
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme || initialTheme)

  const defaultValue = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  return (
      <ThemeContext.Provider value={defaultValue}>
          {children}
      </ThemeContext.Provider>
  )
}
