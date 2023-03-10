import { type FC, type ReactNode, type ReactPortal } from 'react'
import { createPortal } from 'react-dom'
import 'app/styles/index.scss'
import { ThemeProvider, useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib'

interface PortalType {
  children: ReactNode
  container?: Element
}

export const Portal: FC<PortalType> = ({
  children,
  container = document.body
}): ReactPortal => {
  const { theme } = useTheme()

  return (
    createPortal(<ThemeProvider>
        <div className={classNames('portal', {}, [theme])}>
            {children}
        </div>
    </ThemeProvider>, container)
  )
}
