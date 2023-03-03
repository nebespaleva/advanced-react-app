import { type FC, useState } from 'react'
import { classNames } from 'shared/lib'
import styles from './AuthForm.module.scss'
import { Button, ButtonTheme, Input } from 'shared/ui'
import { useTranslation } from 'react-i18next'

interface AuthFormType {
  className?: string
}

export const AuthForm: FC<AuthFormType> = ({ className }) => {
  const { t } = useTranslation()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
      <div className={classNames(styles.authForm, {}, [className])}>
          <Input value={username} onChange={setUsername} placeholder={t('Имя')} autoFocus />
          <Input value={password} onChange={setPassword} placeholder={t('Пароль')} />
          <Button theme={ButtonTheme.PRIMARY}>{t('Войти')}</Button>
      </div>
  )
}
