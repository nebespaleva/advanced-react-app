import { getPasswordSelector } from './getPasswordSelector'
import { type DeepPartial } from '@reduxjs/toolkit'
import { type StoreSchema } from 'app/providers/StoreProvider'

describe('getPassword', () => {
  test('should return getPasswordSelector state', () => {
    const stateData = {
      isLoading: false,
      username: 'word',
      password: 'word',
      error: ''
    }

    const state: DeepPartial<StoreSchema> = {
      authByUsername: stateData
    }

    expect(getPasswordSelector(state as StoreSchema)).toEqual(stateData.password)
  })
})
