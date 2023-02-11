import { type FC } from 'react'
import { classNames } from 'shared/lib'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { Button, ButtonTheme } from 'shared/ui'

interface ThemeSwitcherType {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherType> = ({ className }) => {
  const { theme, toggleTheme } = useTheme()

  return (
      <Button onClick={toggleTheme} theme={ButtonTheme.CLEAR} className={classNames('', {}, [className])}>
          {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
      </Button>
  )
}
