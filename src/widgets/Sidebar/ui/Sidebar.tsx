import { type FC, useState } from 'react'
import { classNames } from 'shared/lib'
import { sidebarItems } from '../model/SidebarItemModel/model'
import styles from './Sidebar.module.scss'
import { LanguageSwitcher, ThemeSwitcher } from 'widgets/Switchers'
import { Button, ButtonTheme } from 'shared/ui'
import DoubleArrow from 'shared/assets/icons/double-left.svg'
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem'

interface SidebarType {
  className?: string
}

export const Sidebar: FC<SidebarType> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = (): void => {
    setCollapsed(prev => !prev)
  }

  return (
      <div
          className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}
          data-testid="sidebar">
          <div className={styles.linksContainer}>
              {sidebarItems.map((item) => (
                  <SidebarItem
                      collapsed={collapsed}
                      route={item.route}
                      Icon={item.Icon}
                      text={item.text}
                      key={item.route}
                  />
              ))}
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
