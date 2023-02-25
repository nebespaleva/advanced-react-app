import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Modal } from 'shared/ui'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Modal>

const children = 'Some long text about good times, and my programming education, and some other thing, that i remember'

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} children={children} />

export const Light = Template.bind({})
Light.args = {
  isOpen: true,
  onClose: () => {}
}

export const Dark = Template.bind({})
Dark.args = {
  isOpen: true,
  onClose: () => {}
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
