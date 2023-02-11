import { classNames } from './classNames'

describe('classNames', () => {
  test('with class', () => {
    const expected = 'class'
    expect(classNames('class', {}, [])).toBe(expected)
  })
  test('with additional', () => {
    const expected = 'class class1 class2'
    expect(classNames('class', {}, ['class1', 'class2'])).toBe(expected)
  })
  test('with mods', () => {
    const expected = 'class class1 class2 hovered selected'
    expect(classNames('class', { hovered: true, selected: true }, ['class1', 'class2'])).toBe(expected)
  })
  test('with one false mode', () => {
    const expected = 'class class1 class2 hovered'
    expect(classNames('class', { hovered: true, selected: false }, ['class1', 'class2'])).toBe(expected)
  })
  test('with one undefined mode', () => {
    const expected = 'class class1 class2 selected'
    expect(classNames('class', { hovered: undefined, selected: true }, ['class1', 'class2'])).toBe(expected)
  })
})
