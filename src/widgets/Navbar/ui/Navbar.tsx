import { type FC } from 'react'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import styles from './Navbar.module.scss'

interface NavbarType {
  className?: string
}

export const Navbar: FC<NavbarType> = ({ className }) => {
  const { t } = useTranslation()

  return (
      <div className={classNames(styles.navbar, {}, [className])}>
          <div className={styles.links}>{t('Заголовок')}
          </div>
      </div>
  )
}
