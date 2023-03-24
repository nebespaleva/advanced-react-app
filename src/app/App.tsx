import { type FC, Suspense, useEffect } from 'react'
import './styles/index.scss'
import { classNames, useAppDispatch } from 'shared/lib'
import { AppRouter } from 'app/providers/AppRouter'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { useTheme } from 'app/providers/ThemeProvider'
import { userActions } from 'entities/User'

const App: FC = () => {
  const { theme } = useTheme()
  const dispatch = useAppDispatch()
  const { initAuthData } = userActions

  useEffect(() => {
    dispatch(initAuthData())
  }, [dispatch, initAuthData])

  return (
      <Suspense fallback=''>
          <div className={classNames('app', {}, [theme])}>
              <Navbar />
              <div className="page-content">
                  <Sidebar />
                  <AppRouter />
              </div>
          </div>
      </Suspense>
  )
}

export default App
