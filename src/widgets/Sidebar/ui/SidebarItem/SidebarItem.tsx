import { type FC, memo } from 'react'
import { classNames } from 'shared/lib'
import styles from './SidebarItem.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { type SidebarItemType } from '../../model/SidebarItemModel/types'

interface SidebarItemProps extends SidebarItemType {
  collapsed: boolean
}

export const SidebarItem: FC<SidebarItemProps> = memo(({ route, Icon, text, collapsed }) => {
  const { t } = useTranslation()

  return (
      <AppLink
          className={classNames(styles.link, { [styles.linkCollapsed]: collapsed }, [])}
          to={route}
          theme={AppLinkTheme.SECONDARY}>
          <Icon className={styles.icon} />
          <span>{t(text)}</span>
      </AppLink>
  )
})
