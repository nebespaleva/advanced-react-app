import { type StoreSchema } from 'app/providers/StoreProvider'

export const getLoadingSelector = (state: StoreSchema): boolean => state.profile?.isLoading
