import { counterReducer, counterActions } from './CounterSlice'
import { type CounterSchema } from '../types/counterSchema'
import { type DeepPartial } from '@reduxjs/toolkit'

describe('getCounter', () => {
  test('use increment action', () => {
    const state: DeepPartial<CounterSchema> = {
      value: 10
    }

    expect(counterReducer(state as CounterSchema, counterActions.increment())).toEqual({ value: 11 })
  })
  test('use decrement action', () => {
    const state: DeepPartial<CounterSchema> = {
      value: 10
    }

    expect(counterReducer(state as CounterSchema, counterActions.decrement())).toEqual({ value: 9 })
  })
  test('test for empty state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 })
  })
})
