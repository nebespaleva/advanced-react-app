import { type StoreSchema } from 'app/providers/StoreProvider'
import { getAuthSelector } from '../getAuthSelector/getAuthSelector'

export const getPasswordSelector = (state: StoreSchema): string => getAuthSelector(state)?.password || ''
