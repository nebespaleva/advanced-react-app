import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Profile, type ProfileSchema } from '../types/profile'
import { getProfileData } from '../services/getProfileData/getProfileData'

const initialState: ProfileSchema = {
  isLoading: false,
  error: '',
  data: undefined
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getProfileData.pending, (state) => {
      state.error = undefined
      state.isLoading = true
    })
    builder.addCase(getProfileData.rejected, (state, action) => {
      console.log(action.payload)
      state.isLoading = false
      state.error = action.payload
    })
    builder.addCase(getProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
      state.isLoading = false
      state.data = action.payload
    })
  }
})

export const {
  actions: profileActions,
  reducer: profileReducer
} = profileSlice
