import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib'
import styles from './Button.module.scss'

export enum ButtonTheme {
  PRIMARY = 'primary',
  CLEAR = 'clear',
}

type ButtonType = {
  className?: string
  theme?: ButtonTheme
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonType> = (props) => {
  const { className, children, theme = ButtonTheme.PRIMARY, ...otherProps } = props
  return (
      <button
          className={classNames(styles.button, {}, [className, styles[theme]])}
          {...otherProps}
        >
          {children}
      </button>
  )
}
