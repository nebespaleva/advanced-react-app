import { type StoreSchema } from 'app/providers/StoreProvider'
import { getAuthSelector } from '../getAuthSelector/getAuthSelector'

export const getUsernameSelector = (state: StoreSchema): string => getAuthSelector(state)?.username || ''
