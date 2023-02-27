import { type FC } from 'react'
import { Button, ButtonTheme } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../model/slice/CounterSlice'
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue'

export const Counter: FC = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValue)

  const increment = (): void => {
    dispatch(counterActions.increment())
  }

  const decrement = (): void => {
    dispatch(counterActions.decrement())
  }

  return (
      <div>
          <span data-testid="title">
              {t('Величина')}-{counterValue}
          </span>
          <Button
              theme={ButtonTheme.CLEAR}
              onClick={increment}
              data-testid="inc"
          >
              {t('Увеличить')}
          </Button>
          <Button
              theme={ButtonTheme.CLEAR}
              onClick={decrement}
              data-testid="dec"
          >
              {t('Уменьшить')}
          </Button>
      </div>
  )
}
