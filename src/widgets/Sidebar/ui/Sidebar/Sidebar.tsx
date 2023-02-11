import { type FC, useState } from 'react'
import { classNames } from 'shared/lib'
import styles from './Sidebar.module.scss'
import { LanguageSwitcher, ThemeSwitcher } from 'widgets/Switchers'
import { Button } from 'shared/ui'
import { useTranslation } from 'react-i18next'

interface SidebarType {
  className?: string
}

export const Sidebar: FC<SidebarType> = ({ className }) => {
  const { t } = useTranslation()
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = (): void => {
    setCollapsed(prev => !prev)
  }

  return (
      <div className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}>
          <Button onClick={toggleCollapsed}>{collapsed ? t('развернуть') : t('скрыть')}</Button>
          <div className={classNames(styles.switchers, { [styles.switchers_collapsed]: collapsed }, [])}>
              <ThemeSwitcher />
              <LanguageSwitcher />
          </div>
      </div>
  )
}
