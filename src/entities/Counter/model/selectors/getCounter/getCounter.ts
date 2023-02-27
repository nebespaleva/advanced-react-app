import { type StoreSchema } from 'app/providers/StoreProvider'
import { type CounterSchema } from 'entities/Counter'

export const getCounter = (state: StoreSchema): CounterSchema => state.counter
