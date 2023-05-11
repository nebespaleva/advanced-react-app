import { type StoreSchema } from 'app/providers/StoreProvider'

export const getErrorSelector = (state: StoreSchema): string => state.profile?.error
