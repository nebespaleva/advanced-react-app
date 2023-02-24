import {RouterDecorator, StylesDecorator, ThemeDecorator} from "../../src/shared/config/storybook";
import { Theme } from "../../src/app/providers/ThemeProvider";
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
]