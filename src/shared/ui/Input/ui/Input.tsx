import { type ChangeEvent, type FC, type InputHTMLAttributes, type SyntheticEvent, useState } from 'react'
import { classNames } from 'shared/lib'
import styles from './Input.module.scss'

type InputType = {
  className?: string
  value: string
  onChange: (value: string) => void
  placeholder: string
  type?: string
  autoFocus?: boolean
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export const Input: FC<InputType> = (
  {
    className,
    onChange,
    value,
    type = 'text',
    placeholder,
    autoFocus = false,
    ...otherProps
  }
) => {
  const [caretPosition, setCaretPosition] = useState(0)
  const [isFocused, setIsFocused] = useState(false)

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange?.(event.target.value)
  }

  const onSelectHandler = (event: SyntheticEvent<HTMLInputElement, Event>): void => {
    setCaretPosition(event.currentTarget.selectionStart || 0)
  }

  const onFocusHandler = (): void => {
    setIsFocused(true)
  }

  const onBlurHandler = (): void => {
    setIsFocused(false)
  }

  return (
      <div className={classNames(styles.wrapper, {}, [className])}>
          <div className={styles.placeholder}>
              {`${placeholder}>`}
          </div>
          <div className={styles.container}>
              <input
                  autoFocus={autoFocus}
                  className={styles.input}
                  type={type}
                  value={value}
                  onChange={onChangeHandler}
                  onSelect={onSelectHandler}
                  onFocus={onFocusHandler}
                  onBlur={onBlurHandler}
                  {...otherProps}
              />
              {isFocused && <span className={styles.caret} style={{ left: `${caretPosition * 9}px` }} />}
          </div>
      </div>
  )
}
