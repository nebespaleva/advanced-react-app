import { type FC } from 'react'
import { classNames } from 'shared/lib'
import styles from './LanguageSwitcher.module.scss'
import { Button, ButtonTheme } from 'shared/ui'
import { useTranslation } from 'react-i18next'

interface LanguageSwitcherType {
  className?: string
  collapsed?: boolean
}

export const LanguageSwitcher: FC<LanguageSwitcherType> = ({ className, collapsed }) => {
  const { t, i18n } = useTranslation()

  return (
      <Button theme={ButtonTheme.CLEAR} className={classNames(styles.languageSwitcher, {}, [className])} onClick={() => {
        void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
      }}>{collapsed
        ? t('короткий язык')
        : t('язык')}
      </Button>
  )
}
