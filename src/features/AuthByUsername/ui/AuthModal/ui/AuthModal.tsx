import { type FC } from 'react'
import { classNames } from 'shared/lib'
import { Modal } from 'shared/ui'
import styles from './AuthModal.module.scss'
import { AuthForm } from '../../AuthForm/ui/AuthForm'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export const AuthModal: FC<AuthModalProps> = ({ isOpen, onClose }) => {
  return (
      <Modal
          className={classNames(styles.authModal, {}, [])}
          isOpen={isOpen}
          onClose={onClose}
          lazy
      >
          <AuthForm />
      </Modal>
  )
}
