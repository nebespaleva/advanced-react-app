import { type FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { appRouterConfig } from 'shared/config/appRouterConfig'
import { PageLoader } from 'widgets/PageLoader'

export const AppRouter: FC = () => {
  return (
      <div className="page-wrapper">
          <Suspense fallback={<PageLoader />}>
              <Routes>
                  {Object.values(appRouterConfig).map(({ path, element }) => (
                      <Route key={path} element={element} path={path} />
                  ))}
              </Routes>
          </Suspense>
      </div>
  )
}
