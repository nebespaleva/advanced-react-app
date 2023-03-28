import { type FC, memo } from 'react'
import { classNames } from 'shared/lib'
import styles from './Text.module.scss'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface TextType {
  className?: string
  title?: string
  description?: string
  theme?: TextTheme
}

export const Text: FC<TextType> = memo(
  ({
    className,
    title,
    description,
    theme = TextTheme.PRIMARY
  }) => {
    const textMods = { [styles[theme]]: true }
    return (
        <div className={classNames(styles.text, textMods, [className])}>
            {title && <span className={styles.title}>{title}</span>}
            {description && <span className={styles.description}>{description}</span>}
        </div>
    )
  }
)
