import { getAuthSelector } from './getAuthSelector'
import { type DeepPartial } from '@reduxjs/toolkit'
import { type StoreSchema } from 'app/providers/StoreProvider'

describe('getAuth', () => {
  test('should return getAuthSelector state', () => {
    const stateData = {
      isLoading: false,
      username: 'word',
      password: 'word',
      error: ''
    }

    const state: DeepPartial<StoreSchema> = {
      authByUsername: stateData
    }

    expect(getAuthSelector(state as StoreSchema)).toEqual(stateData)
  })
})
