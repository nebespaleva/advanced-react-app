import { type FC, type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { type StoreSchema } from '../config/StoreSchema'
import { type ReducersMapObject } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'

interface StoreProviderType {
  children?: ReactNode
  initialStore?: StoreSchema
  asyncReducers?: ReducersMapObject<StoreSchema>
}

export const StoreProvider: FC<StoreProviderType> = ({ children, initialStore, asyncReducers }) => {
  const navigate = useNavigate()
  const store = createReduxStore(initialStore, asyncReducers, navigate)
  return (
      <Provider store={store}>
          { children }
      </Provider>
  )
}
