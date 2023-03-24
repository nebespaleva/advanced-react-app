import {
  RouterDecorator,
  StoreDecorator,
  StylesDecorator,
  ThemeDecorator,
} from "shared/config/storybook";
import { Theme } from "app/providers/ThemeProvider";
import i18n from "./i18nStories";
import { initialState } from "../../stubs/initialState/initialState";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  i18n,
  locale: "en",
  locales: {
    en: "English",
    ru: "Russian",
  },
};

export const decorators = [
  StylesDecorator,
  ThemeDecorator(Theme.LIGHT),
  RouterDecorator,
  StoreDecorator(initialState),
];
