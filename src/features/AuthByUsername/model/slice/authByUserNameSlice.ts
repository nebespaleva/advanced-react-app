import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { authByUsername } from '../services/authByUsername'
import { type AuthByUserNameSchema } from '../types/authByUserNameTypes'

const initialState: AuthByUserNameSchema = {
  isLoading: false,
  username: '',
  password: ''
}

export const authByUsernameSlice = createSlice({
  name: 'authByUsername',
  initialState,
  reducers: {
    setUsername (state, action: PayloadAction<string>) {
      state.username = action.payload
      state.error = undefined
    },
    setPassword (state, action: PayloadAction<string>) {
      state.password = action.payload
      state.error = undefined
    }
  },
  extraReducers: (builder) => {
    builder.addCase(authByUsername.pending, (state) => {
      state.error = undefined
      state.isLoading = true
    })
    builder.addCase(authByUsername.rejected, (state, action) => {
      console.log(action.payload)
      state.isLoading = false
      state.error = action.payload
    })
    builder.addCase(authByUsername.fulfilled, (state) => {
      state.isLoading = false
    })
  }
})

export const {
  actions: authByUsernameActions,
  reducer: authByUsernameReducer
} = authByUsernameSlice
