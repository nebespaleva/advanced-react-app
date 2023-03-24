import { type FC, useEffect } from 'react'
import { Modal } from 'shared/ui'
import { AuthForm } from '../../AuthForm/ui/AuthForm'
import { authByUsernameActions } from 'features/AuthByUsername/model/slice/authByUserNameSlice'
import { useAppDispatch } from 'shared/lib'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export const AuthModal: FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch()
  const { setPassword, setUsername } = authByUsernameActions

  useEffect(() => {
    if (isOpen) return
    return () => {
      dispatch(setUsername(''))
      dispatch(setPassword(''))
    }
  }, [dispatch, setUsername, setPassword, isOpen])

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
