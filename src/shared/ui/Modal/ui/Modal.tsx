import { type FC, type MouseEvent, type ReactNode, useCallback, useEffect } from 'react'
import { classNames } from 'shared/lib'
import styles from './Modal.module.scss'
import { Portal } from 'shared/ui/Portal/Portal'
import { useTheme } from 'app/providers/ThemeProvider'

interface ModalType {
  children: ReactNode
  className?: string
  contentClassName?: string
  isOpen: boolean
  onClose: () => void
}

export const Modal: FC<ModalType> = ({ className, onClose, isOpen, children, contentClassName }) => {
  const modalMods = {
    [styles.modalOpened]: isOpen
  }
  const contentMods = {
    [styles.contentOpened]: isOpen
  }

  const { theme } = useTheme()

  const onKeyDown = useCallback((event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      onClose()
    }
  }, [onClose])

  const onContentClick = (event: MouseEvent): void => {
    event.stopPropagation()
  }

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onKeyDown])

  return (
      <Portal>
          <div
              className={classNames(styles.modal, modalMods, [className, theme])}
              onClick={onClose}
          >
              <div className={classNames(styles.overlay, {}, [])}>
                  <div
                      className={classNames(styles.content, contentMods, [contentClassName])}
                      onClick={onContentClick}
                  >
                      {children}
                  </div>
              </div>
          </div>
      </Portal>
  )
}
