import { getErrorSelector } from './getErrorSelector'
import { type DeepPartial } from '@reduxjs/toolkit'
import { type StoreSchema } from 'app/providers/StoreProvider'

describe('getError', () => {
  test('should return getErrorSelector state', () => {
    const stateData = {
      isLoading: false,
      username: 'word',
      password: 'word',
      error: ''
    }

    const state: DeepPartial<StoreSchema> = {
      authByUsername: stateData
    }

    expect(getErrorSelector(state as StoreSchema)).toEqual(stateData.error)
  })
})
