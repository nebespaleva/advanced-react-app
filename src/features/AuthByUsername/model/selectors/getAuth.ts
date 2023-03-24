import { type StoreSchema } from 'app/providers/StoreProvider'
import { type AuthByUserNameSchema } from '../types/authByUserNameTypes'

export const getAuth = (state: StoreSchema): AuthByUserNameSchema => state.authByUsername
