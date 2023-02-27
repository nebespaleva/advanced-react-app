import { getCounter } from './getCounter'
import { type DeepPartial } from '@reduxjs/toolkit'
import { type StoreSchema } from 'app/providers/StoreProvider'

describe('getCounter', () => {
  test('should return counter state', () => {
    const state: DeepPartial<StoreSchema> = {
      counter: {
        value: 10
      }
    }

    expect(getCounter(state as StoreSchema)).toEqual(state.counter)
  })
})
