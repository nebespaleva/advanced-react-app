import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Button, ButtonTheme } from 'shared/ui'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Text',
  theme: ButtonTheme.PRIMARY
}

export const PrimaryDisabled = Template.bind({})
PrimaryDisabled.args = {
  children: 'Text',
  theme: ButtonTheme.PRIMARY,
  disabled: true
}

export const Clear = Template.bind({})
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR
}

export const Error = Template.bind({})
Error.args = {
  children: 'Text',
  theme: ButtonTheme.ERROR
}

export const ErrorDark = Template.bind({})
ErrorDark.args = {
  children: 'Text',
  theme: ButtonTheme.ERROR
}
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)]
