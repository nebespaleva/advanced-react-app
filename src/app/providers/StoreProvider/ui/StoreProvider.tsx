import { type FC, type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { type StoreSchema } from '../config/StoreSchema'

interface StoreProviderType {
  children?: ReactNode
  initialStore?: StoreSchema
}

export const StoreProvider: FC<StoreProviderType> = ({ children, initialStore }) => {
  const store = createReduxStore(initialStore)
  return (
      <Provider store={store}>
          { children }
      </Provider>
  )
}
