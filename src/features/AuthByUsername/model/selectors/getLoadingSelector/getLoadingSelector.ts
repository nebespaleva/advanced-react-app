import { type StoreSchema } from 'app/providers/StoreProvider'
import { getAuthSelector } from '../getAuthSelector/getAuthSelector'

export const getLoadingSelector = (state: StoreSchema): boolean => getAuthSelector(state)?.isLoading || false
