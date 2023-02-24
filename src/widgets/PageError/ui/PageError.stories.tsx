import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { PageError } from 'widgets/PageError'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'widget/PageError',
  component: PageError,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    error: {
      name: 'Some error',
      message: 'Reason why you see this page'
    }
  }
} as ComponentMeta<typeof PageError>

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
