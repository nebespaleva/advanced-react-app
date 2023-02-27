import { type FC, type ReactNode, type ReactPortal } from 'react'
import { createPortal } from 'react-dom'
import 'app/styles/index.scss'

interface PortalType {
  children: ReactNode
  container?: Element
}

export const Portal: FC<PortalType> = ({ children, container = document.body }): ReactPortal => {
  return (
    createPortal(children, container)
  )
}
