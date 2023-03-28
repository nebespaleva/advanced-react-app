import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Input } from 'shared/ui'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const WithText = Template.bind({})
WithText.args = {
  placeholder: 'input',
  value: 'text'
}

export const WithFocus = Template.bind({})
WithFocus.args = {
  placeholder: 'input',
  autoFocus: true
}

export const DarkWithText = Template.bind({})
DarkWithText.args = {
  placeholder: 'input',
  value: 'text'
}
DarkWithText.decorators = [ThemeDecorator(Theme.DARK)]

export const DarkWithFocus = Template.bind({})
DarkWithFocus.args = {
  placeholder: 'input',
  autoFocus: true
}
DarkWithFocus.decorators = [ThemeDecorator(Theme.DARK)]
