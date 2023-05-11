import { createAsyncThunk } from '@reduxjs/toolkit'
import { type User, userActions } from 'entities/User'
import i18n from 'shared/config/i18n/i18n'
import { type ThunkConfig } from 'app/providers/StoreProvider'

interface AuthByUsernameData {
  username: string
  password: string
}

export const authByUsername = createAsyncThunk<User, AuthByUsernameData, ThunkConfig<string>>(
  'login/authByUsername',
  async ({ username, password }, thunkAPI) => {
    const { extra, rejectWithValue, dispatch } = thunkAPI
    try {
      const { data, status } = await extra.api.post<User>('/login', {
        username,
        password
      })

      extra.navigate('/about')

      if (status === 403) throw new Error()

      dispatch(userActions.setUserIsAuth(data))
      return data
    } catch (error) {
      console.log(error)
      return rejectWithValue(i18n.t('Неверный логин или пароль'))
    }
  }
)
