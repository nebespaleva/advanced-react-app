import { type FC, useState } from 'react'
import { classNames } from 'shared/lib'
import styles from './Sidebar.module.scss'
import { LanguageSwitcher, ThemeSwitcher } from 'widgets/Switchers'
import { AppLink, AppLinkTheme, Button, ButtonTheme } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { RoutePaths } from 'shared/config/router/appRouterConfig'
import DoubleArrow from 'shared/assets/icons/double-left.svg'
import Main from 'shared/assets/icons/home.svg'
import About from 'shared/assets/icons/about.svg'

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
      <div
          className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}
          data-testid="sidebar">
          <div className={styles.linksContainer}>
              <AppLink
                  className={classNames(styles.link, { [styles.linkCollapsed]: collapsed }, [])}
                  to={RoutePaths.main}
                  theme={AppLinkTheme.SECONDARY}>
                  <Main className={styles.icon} />
                  <span>{t('Главная')}</span>
              </AppLink>
              <AppLink
                  className={classNames(styles.link, { [styles.linkCollapsed]: collapsed }, [])}
                  to={RoutePaths.about}
                  theme={AppLinkTheme.SECONDARY}>
                  < About className={styles.icon} />
                  <span>{t('О нас')}</span>
              </AppLink>
          </div>
          <Button
              onClick={toggleCollapsed}
              theme={ButtonTheme.CLEAR}
              className={styles.collapseButton}
              data-testid="toggle-collapse">
              {collapsed
                ? <DoubleArrow className={classNames(styles.icon, { [styles.iconCollapsed]: collapsed }, [])} />
                : <DoubleArrow className={styles.icon} />}
          </Button>
          <div
              className={classNames(styles.switchers, { [styles.switchers_collapsed]: collapsed }, [])}
              data-testid="switchers">
              <ThemeSwitcher />
              <LanguageSwitcher collapsed={collapsed} />
          </div>
      </div>
  )
}
