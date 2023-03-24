import { type StoreSchema } from 'app/providers/StoreProvider'

export const initialState: StoreSchema = {
  user: {
    userAuth: undefined
  },
  counter: {
    value: 2
  }
}
