import { type FC, type MouseEvent, type ReactNode, useCallback, useEffect, useState } from 'react'
import { classNames } from 'shared/lib'
import styles from './Modal.module.scss'
import { Portal } from 'shared/ui/Portal/Portal'

interface ModalType {
  children: ReactNode
  className?: string
  contentClassName?: string
  isOpen: boolean
  onClose: () => void
  lazy?: boolean
}

export const Modal: FC<ModalType> = ({
  className,
  onClose,
  isOpen,
  children,
  contentClassName,
  lazy
}) => {
  const [isMounted, setIsMounted] = useState(false)

  const modalMods = {
    [styles.modalOpened]: isOpen
  }
  const contentMods = {
    [styles.contentOpened]: isOpen
  }

  const onKeyDown = useCallback((event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      onClose()
    }
  }, [onClose])

  const onContentClick = (event: MouseEvent): void => {
    event.stopPropagation()
  }

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
    return () => { setIsMounted(false) }
  }, [isOpen])

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onKeyDown])

  if (lazy && !isMounted) return null

  return (
      <Portal>
          <div
              className={classNames(styles.modal, modalMods, [className])}
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
