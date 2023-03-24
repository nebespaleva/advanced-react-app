import { type StoreSchema } from 'app/providers/StoreProvider'
import { type AuthByUserNameSchema } from '../../types/authByUserNameTypes'

export const getAuthSelector = (state: StoreSchema): AuthByUserNameSchema => state.authByUsername
