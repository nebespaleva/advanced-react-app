import { type StoreSchema } from 'app/providers/StoreProvider'
import { type Profile } from '../../types/Profile'

export const getProfileDataSelector = (state: StoreSchema): Profile => state.profile?.data
