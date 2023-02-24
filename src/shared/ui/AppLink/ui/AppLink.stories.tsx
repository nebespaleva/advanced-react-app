import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { AppLink, AppLinkTheme } from 'shared/ui'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY,
  to: '/'
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Text',
  theme: AppLinkTheme.SECONDARY,
  to: '/'
}

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
  children: 'Text',
  theme: AppLinkTheme.SECONDARY,
  to: '/'
}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
