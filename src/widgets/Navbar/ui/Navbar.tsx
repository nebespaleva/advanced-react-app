import { type FC, useCallback, useState } from 'react'
import { classNames, useAppDispatch } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import styles from './Navbar.module.scss'
import { Button, ButtonTheme } from 'shared/ui'
import { AuthModal } from 'features/AuthByUsername'
import { getUserAuth, userActions } from 'entities/User'
import { useSelector } from 'react-redux'

interface NavbarType {
  className?: string
}

export const Navbar: FC<NavbarType> = ({ className }) => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const authData = useSelector(getUserAuth)
  const { setUserIsLogout } = userActions

  const toggleOpen = useCallback((): void => {
    setOpen(prev => !prev)
  }, [])

  const logOutHandler = useCallback((): void => {
    dispatch(setUserIsLogout())
  }, [dispatch, setUserIsLogout])

  if (authData) {
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR} onClick={logOutHandler}>{t('Выйти')}</Button>
        </div>
    )
  }

  return (
      <div className={classNames(styles.navbar, {}, [className])}>
          <Button theme={ButtonTheme.CLEAR} onClick={toggleOpen}>{t('Войти')}</Button>
          { open && <AuthModal isOpen={open} onClose={toggleOpen} /> }
      </div>
  )
}
