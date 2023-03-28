import { type StoreSchemaKey, type StoreWithManager } from 'app/providers/StoreProvider/config/StoreSchema'
import { type Reducer } from '@reduxjs/toolkit'
import { useStore } from 'react-redux'
import { useEffect } from 'react'
import { useAppDispatch } from 'shared/lib'

export type ReducerList = {
  [name in StoreSchemaKey]?: Reducer
}

type ReducerListEntry = [StoreSchemaKey, Reducer]

interface UseDynamicLoadModuleProps {
  reducers: ReducerList
  removeAfterUnmount?: boolean
}

export const UseDynamicLoadModule = ({ reducers, removeAfterUnmount = true }: UseDynamicLoadModuleProps): void => {
  const store = useStore() as StoreWithManager
  const dispatch = useAppDispatch()

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
      store.reducerManager?.add(name, reducer)
      dispatch({ type: '@@CREATE store' })
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]: ReducerListEntry) => {
          store.reducerManager?.remove(name)
          dispatch({ type: '@@DESTROY store' })
        })
      }
    }
    // eslint-disable-next-line
  }, [])
}
