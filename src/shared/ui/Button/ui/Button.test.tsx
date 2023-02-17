import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from 'shared/ui'

describe('Button', () => {
  test('to be in the document', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
  test('to be with cleare theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('clear')
  })
})
