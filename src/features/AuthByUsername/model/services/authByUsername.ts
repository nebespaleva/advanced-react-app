import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type User, userActions } from 'entities/User'
import i18n from 'shared/config/i18n/i18n'

interface AuthByUsernameData {
  username: string
  password: string
}

export const authByUsername = createAsyncThunk<User, AuthByUsernameData, { rejectValue: string }>(
  'login/authByUsername',
  async ({ username, password }, thunkAPI) => {
    try {
      const { data, status } = await axios.post<User>('http://localhost:8000/login', {
        username,
        password
      })

      if (status === 403) throw new Error()

      thunkAPI.dispatch(userActions.setUserIsAuth(data))
      return data
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(i18n.t('Неверный логин или пароль'))
    }
  }
)
