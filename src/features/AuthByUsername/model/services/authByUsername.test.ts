import axios from 'axios'
import { authByUsername } from './authByUsername'
import { userActions } from 'entities/User'
import { AsyncThunk } from 'shared/config/test'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

describe('test authByUsername', () => {
  test('test success auth', async () => {
    const value = { username: '123', id: '1' }
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: value }))
    const thunk = new AsyncThunk(authByUsername)
    const result = await thunk.callThunk({ username: '123', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setUserIsAuth(value))
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(value)
  })
  test('test failure auth', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const thunk = new AsyncThunk(authByUsername)
    const result = await thunk.callThunk({ username: '123', password: '123' })

    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual('Неверный логин или пароль')
  })
})
