import { type StoreSchema } from 'app/providers/StoreProvider'
import { type User } from '../types/user'

export const getUserAuth = (state: StoreSchema): User => state.user.userAuth
