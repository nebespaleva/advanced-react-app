import { type FC, Suspense } from 'react'
import './styles/index.scss'
import { classNames } from 'shared/lib'
import { AppRouter } from 'app/providers/AppRouter'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

const App: FC = () => {
  return (
      <Suspense fallback=''>
          <div className={classNames('app', {}, [])}>
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
