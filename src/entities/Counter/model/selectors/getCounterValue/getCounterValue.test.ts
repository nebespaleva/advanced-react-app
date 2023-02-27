import { getCounterValue } from './getCounterValue'
import { type DeepPartial } from '@reduxjs/toolkit'
import { type StoreSchema } from 'app/providers/StoreProvider'

describe('getCounter', () => {
  test('should return counter state', () => {
    const state: DeepPartial<StoreSchema> = {
      counter: {
        value: 10
      }
    }

    expect(getCounterValue(state as StoreSchema)).toEqual(state.counter.value)
  })
})
