import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import AuthForm from './AuthForm'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator, StoreDecorator } from 'shared/config/storybook'
import { initialState } from '../../../../../../stubs/initialState/initialState'
import { authByUsernameReducer } from 'features/AuthByUsername'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'features/AuthForm',
  component: AuthForm,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof AuthForm>

const Template: ComponentStory<typeof AuthForm> = (args) => <AuthForm {...args} />

export const Primary = Template.bind({})

export const WithError = Template.bind({})
WithError.decorators = [StoreDecorator(initialState, { authByUsername: authByUsernameReducer })]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
