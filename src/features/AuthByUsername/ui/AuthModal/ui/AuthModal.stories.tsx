import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { AuthModal } from './AuthModal'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'features/AuthModal',
  component: AuthModal,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof AuthModal>

const Template: ComponentStory<typeof AuthModal> = (args) => <AuthModal {...args} />

export const Primary = Template.bind({})
Primary.args = {
  isOpen: true
}

export const Dark = Template.bind({})
Dark.args = {
  isOpen: true
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
