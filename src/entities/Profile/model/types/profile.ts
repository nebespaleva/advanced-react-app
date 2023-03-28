import { type CountriesEnum, type CurrencyEnum } from 'shared/constants'

export interface Profile {
  name: string
  country: CountriesEnum
  city: string
  currency: CurrencyEnum
  age: number
}

export interface ProfileSchema {
  data?: Profile
  isLoading: boolean
  error?: string
}
