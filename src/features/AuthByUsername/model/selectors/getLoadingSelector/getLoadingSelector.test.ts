import { getLoadingSelector } from './getLoadingSelector'
import { type DeepPartial } from '@reduxjs/toolkit'
import { type StoreSchema } from 'app/providers/StoreProvider'

describe('getLoading', () => {
  test('should return getLoadingSelector state', () => {
    const stateData = {
      isLoading: false,
      username: 'word',
      password: 'word',
      error: ''
    }

    const state: DeepPartial<StoreSchema> = {
      authByUsername: stateData
    }

    expect(getLoadingSelector(state as StoreSchema)).toEqual(stateData.isLoading)
  })
})
