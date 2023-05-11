import { createAsyncThunk } from '@reduxjs/toolkit'
import i18n from 'shared/config/i18n/i18n'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Profile } from '../../types/profile'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const getProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/getProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI
    try {
      const { data } = await extra.api.get<Profile>('/profile')
      return data
    } catch (error) {
      console.log(error)
      return rejectWithValue(i18n.t('Неверный логин или пароль'))
    }
  }
)
