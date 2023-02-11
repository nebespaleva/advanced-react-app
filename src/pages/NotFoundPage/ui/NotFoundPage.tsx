import { type FC } from 'react'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import styles from './NotFoundPage.module.scss'

interface NotFoundPageType {
  className?: string
}

export const NotFoundPage: FC<NotFoundPageType> = ({ className }) => {
  const { t } = useTranslation()
  return (
      <div className={classNames(styles.notFoundPage, {}, [className])}>
          {t('Страница не найдена')}
      </div>
  )
}
