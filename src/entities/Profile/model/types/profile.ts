import { type CountriesEnum, type CurrencyEnum } from 'shared/constants'

export interface Profile {
  firstName: string
  lastName: string
  country: CountriesEnum
  city: string
  currency: CurrencyEnum
  age: number
  position: string
}

export interface ProfileSchema {
  data?: Profile
  isLoading: boolean
  error?: string
}
