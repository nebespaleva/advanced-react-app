import { type FC, memo, useCallback } from 'react'
import { classNames, useAppDispatch } from 'shared/lib'
import { Button, ButtonTheme, Input, Text, TextTheme } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import styles from './AuthForm.module.scss'
import { getAuth } from '../../../model/selectors/getAuth'
import { authByUsernameActions } from '../../../model/slice/authByUserNameSlice'
import { authByUsername } from '../../../model/services/authByUsername'

interface AuthFormType {
  className?: string
}

export const AuthForm: FC<AuthFormType> = memo(({ className }) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const { password, username, isLoading, error } = useSelector(getAuth)

  const { setPassword, setUsername } = authByUsernameActions

  const changeUsernameHandler = useCallback((value: string): void => {
    dispatch(setUsername(value))
  }, [setUsername, dispatch])

  const changePasswordHandler = useCallback((value: string): void => {
    dispatch(setPassword(value))
  }, [setPassword, dispatch])

  const onClickLogin = useCallback(async (): Promise<void> => {
    await dispatch(authByUsername({
      username,
      password
    }))
  }, [dispatch, username, password])

  return (
      <div className={classNames(styles.authForm, {}, [className])}>
          <Text title={t('Форма авторизации')} />
          {error && <Text description={error} theme={TextTheme.ERROR}/>}
          <Input
              value={username}
              onChange={changeUsernameHandler}
              placeholder={t('Имя')}
              autoFocus
          />
          <Input
              value={password}
              onChange={changePasswordHandler}
              placeholder={t('Пароль')}
          />
          <Button
              theme={ButtonTheme.PRIMARY}
              onClick={onClickLogin}
              disabled={isLoading}
          >
              {t('Войти')}
          </Button>
      </div>
  )
})
