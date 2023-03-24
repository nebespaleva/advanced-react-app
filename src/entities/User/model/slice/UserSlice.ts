import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type User, type UserSchema } from '../types/user'
import { USER_AUTH_KEY } from 'shared/constants'

const initialState: UserSchema = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserIsAuth (state, action: PayloadAction<User>) {
      state.userAuth = action.payload
      localStorage.setItem(USER_AUTH_KEY, JSON.stringify(action.payload))
    },
    initAuthData (state) {
      const user = localStorage.getItem(USER_AUTH_KEY)
      if (user) {
        state.userAuth = JSON.parse(user)
      }
    },
    setUserIsLogout (state) {
      state.userAuth = undefined
      localStorage.removeItem(USER_AUTH_KEY)
    }
  }
})

export const {
  actions: userActions,
  reducer: userReducer
} = userSlice
