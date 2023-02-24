import { type FC } from 'react'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import styles from './PageError.module.scss'
import { Button, ButtonTheme } from 'shared/ui'

interface PageErrorType {
  className?: string
  error: {
    name: string
    message: string
  }
}

export const PageError: FC<PageErrorType> = ({ className, error }) => {
  const { t } = useTranslation()

  const handleReload = (): void => { location.reload() }

  return (
      <div className={classNames(styles.pageError, {}, [className])}>
          <span className={styles.title}>{t('Произошла ошибка ')}:(</span>
          <span className={styles.description}>{t('Наименование ошибки:')} {error.name}</span>
          <span className={styles.description}>{t('Текст ошибки:')} {error.message}</span>
          <Button onClick={handleReload} theme={ButtonTheme.ERROR}>{t('Перезагрузить')}</Button>
      </div>
  )
}
