import {RouterDecorator, StoreDecorator, StylesDecorator, ThemeDecorator} from "shared/config/storybook";
import { Theme } from "app/providers/ThemeProvider";
import i18n from "./i18nStories"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
    i18n,
    locale: 'en',
    locales: {
        en: 'English',
        ru: 'Russian'
    },
}

export const decorators = [
    StylesDecorator,
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
    StoreDecorator({
        authByUsername: {
            username: '123',
            password: '123',
            isLoading: false
        },
        user: {
            userAuth: undefined
        },
        counter: {
            value: 2
        }
    })
]