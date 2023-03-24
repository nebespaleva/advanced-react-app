import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Text, TextTheme } from 'shared/ui'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Text',
  description: 'Text',
  theme: TextTheme.PRIMARY
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  title: 'Text',
  description: 'Text',
  theme: TextTheme.PRIMARY
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Error = Template.bind({})
Error.args = {
  title: 'Text',
  description: 'Text',
  theme: TextTheme.ERROR
}

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
  title: 'Text',
  theme: TextTheme.PRIMARY
}

export const OnlyDescription = Template.bind({})
OnlyDescription.args = {
  description: 'Text',
  theme: TextTheme.PRIMARY
}
