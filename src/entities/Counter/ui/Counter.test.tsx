import { screen } from '@testing-library/react'
import { Counter } from 'entities/Counter'
import { RenderComponent } from 'shared/config/test'
import { userEvent } from '@storybook/testing-library'

describe('Counter', () => {
  beforeEach(() => {
    RenderComponent(<Counter />, {
      initialStore: {
        counter: {
          value: 10
        }
      }
    })
  })

  test('initialized state will be rendered', () => {
    expect(screen.getByTestId('title')).toHaveTextContent('10')
  })
  test('click to increment button', () => {
    userEvent.click(screen.getByTestId('inc'))
    expect(screen.getByTestId('title')).toHaveTextContent('11')
  })
  test('click to decrement button', () => {
    userEvent.click(screen.getByTestId('dec'))
    expect(screen.getByTestId('title')).toHaveTextContent('9')
  })
})
