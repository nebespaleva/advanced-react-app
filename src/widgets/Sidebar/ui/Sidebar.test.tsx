import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from 'widgets/Sidebar'
import { renderWithUseTranslation } from 'shared/lib'

describe('Sidebar', () => {
  test('to be in the document', () => {
    renderWithUseTranslation(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
  test('will be collapsed', () => {
    renderWithUseTranslation(<Sidebar />)
    const toggleButton = screen.getByTestId('toggle-collapse')
    fireEvent.click(toggleButton)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    expect(screen.getByTestId('switchers')).toHaveClass('switchers_collapsed')
  })
})
