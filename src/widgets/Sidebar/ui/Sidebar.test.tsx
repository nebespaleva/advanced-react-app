import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from 'widgets/Sidebar'
import { RenderComponent } from 'shared/config/test'

describe('Sidebar', () => {
  test('to be in the document', () => {
    RenderComponent(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
  test('will be collapsed', () => {
    RenderComponent(<Sidebar />)
    const toggleButton = screen.getByTestId('toggle-collapse')
    fireEvent.click(toggleButton)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    expect(screen.getByTestId('switchers')).toHaveClass('switchers_collapsed')
  })
})
