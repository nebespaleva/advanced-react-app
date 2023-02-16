import { type FC, useEffect, useState } from 'react'
import { Button, ButtonTheme } from 'shared/ui'
import { useTranslation } from 'react-i18next'

// Button to throw error for test
export const BugButton: FC = () => {
  const [error, setError] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  const handleThrowError = (): void => { setError(prev => !prev) }
  return (
      <Button onClick={handleThrowError} theme={ButtonTheme.CLEAR}>
          {t('Выбросить ошибку')}
      </Button>
  )
}
