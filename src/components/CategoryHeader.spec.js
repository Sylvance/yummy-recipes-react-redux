import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';

import CategoryHeader from './CategoryHeader'
import CategoryTextInput from './CategoryTextInput'

const setup = () => {
  const props = {
    addCategory: jest.fn()
  }

  const renderer = createRenderer();
  renderer.render(<CategoryHeader {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('CategoryHeader', () => {
    it('should render correctly', () => {
      const { output } = setup()

      expect(output.type).toBe('Categoryheader')
      expect(output.props.className).toBe('Categoryheader')

      const [ h1, input ] = output.props.children

      expect(h1.type).toBe('h1')
      expect(h1.props.children).toBe('categories')

      expect(input.type).toBe(CategoryTextInput)
      expect(input.props.newCategory).toBe(true)
      expect(input.props.placeholder).toBe('What needs to be done?')
    })

    it('should call addCategory if length of text is greater than 0', () => {
      const { output, props } = setup()
      const input = output.props.children[1]
      input.props.onSave('')
      expect(props.addCategory).not.toBeCalled()
      input.props.onSave('Add a Category')
      expect(props.addCategory).toBeCalled()
    })
  })
})
