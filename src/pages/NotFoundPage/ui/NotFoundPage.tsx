import { type FC } from 'react'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import styles from './NotFoundPage.module.scss'
import { Button, ButtonTheme } from 'shared/ui'

interface NotFoundPageType {
  className?: string
}

export const NotFoundPage: FC<NotFoundPageType> = ({ className }) => {
  const { t } = useTranslation()

  const handleReturn = (): void => {
    location.href = '/'
  }

  return (
      <div className={classNames(styles.notFoundPage, {}, [className])}>
          {t('Страница не найдена')}
          <Button theme={ButtonTheme.ERROR} onClick={handleReturn}>{t('На главную')}</Button>
      </div>
  )
}
