import { type ButtonHTMLAttributes, type FC, memo } from 'react'
import { classNames } from 'shared/lib'
import styles from './Button.module.scss'

export enum ButtonTheme {
  PRIMARY = 'primary',
  CLEAR = 'clear',
  ERROR = 'error',
}

type ButtonType = {
  className?: string
  theme?: ButtonTheme
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonType> = memo((props) => {
  const { className, children, theme = ButtonTheme.PRIMARY, disabled, ...otherProps } = props
  const buttonMods = {
    [styles.disabled]: disabled
  }

  return (
      <button
          className={classNames(styles.button, buttonMods, [className, styles[theme]])}
          disabled={disabled}
          {...otherProps}
        >
          {children}
      </button>
  )
})
