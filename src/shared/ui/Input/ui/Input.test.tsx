import { render, screen } from '@testing-library/react'
import { Input } from 'shared/ui'

describe('Input', () => {
  let value: string
  let onChange: () => void
  let placeholder: string
  const testId = 'custom-input'

  beforeEach(() => {
    value = 'test'
    onChange = jest.fn()
    placeholder = 'name'
  })
  test('to be in the document', () => {
    render(<Input value={value} onChange={onChange} placeholder={placeholder} />)
    expect(screen.getByTestId(testId)).toBeInTheDocument()
  })
  test('to have value', () => {
    render(<Input value={value} onChange={onChange} placeholder={placeholder} />)
    const input: HTMLInputElement = screen.getByTestId(testId)

    expect(input.value).toEqual(value)
  })
  // TODO: why fireEvent doesn't work?
  // test('to have changed value', () => {
  //   const anotherValue = 'another value'
  //   render(<Input value={value} onChange={onChange} placeholder={placeholder} />)
  //   const input: HTMLInputElement = screen.getByTestId(testId)
  //
  //   console.log(input)
  //
  //   expect(input.value).toEqual(value)
  //   fireEvent.change(input, { target: { value: anotherValue } })
  //   expect(input.value).toEqual(anotherValue)
  // })
})
