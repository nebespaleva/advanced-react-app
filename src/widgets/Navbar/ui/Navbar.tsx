import { type FC, useState } from 'react'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import styles from './Navbar.module.scss'
import { Button, ButtonTheme, Modal } from 'shared/ui'

interface NavbarType {
  className?: string
}

export const Navbar: FC<NavbarType> = ({ className }) => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  const toggleOpen = (): void => {
    setOpen(prev => !prev)
  }

  return (
      <div className={classNames(styles.navbar, {}, [className])}>
          <Button theme={ButtonTheme.CLEAR} onClick={toggleOpen}>{t('Войти')}</Button>
          <Modal isOpen={open} onClose={toggleOpen}>
              {t('На главную')}
          </Modal>
      </div>
  )
}
