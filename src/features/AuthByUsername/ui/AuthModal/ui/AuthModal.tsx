import { type FC } from 'react'
import { Modal } from 'shared/ui'
import { AuthForm } from '../../AuthForm/ui/AuthForm'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export const AuthModal: FC<AuthModalProps> = ({ isOpen, onClose }) => {
  return (
      <Modal
          isOpen={isOpen}
          onClose={onClose}
          lazy
      >
          <AuthForm />
      </Modal>
  )
}
