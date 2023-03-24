import { getUsernameSelector } from './getUsernameSelector'
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

    expect(getUsernameSelector(state as StoreSchema)).toEqual(stateData.username)
  })
})
