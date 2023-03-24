import { type StoreSchema } from 'app/providers/StoreProvider'
import { getAuthSelector } from '../getAuthSelector/getAuthSelector'

export const getErrorSelector = (state: StoreSchema): string => getAuthSelector(state)?.error || ''
