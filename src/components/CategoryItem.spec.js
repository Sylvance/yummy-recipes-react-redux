import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import CategoryItem from './CategoryItem'
import CategoryTextInput from './CategoryTextInput'

const setup = ( editing = false ) => {
  const props = {
    category: {
      id: 0,
      text: 'Add a Category',
      completed: false
    },
    editCategory: jest.fn(),
    deleteCategory: jest.fn(),
    completeCategory: jest.fn()
  }

  const renderer = createRenderer()

  renderer.render(
    <CategoryItem {...props} />
  )

  let output = renderer.getRenderOutput()

  if (editing) {
    const label = output.props.children.props.children[1]
    label.props.onDoubleClick({})
    output = renderer.getRenderOutput()
  }

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('CategoryItem', () => {
    it('initial render', () => {
      const { output } = setup()

      expect(output.type).toBe('li')
      expect(output.props.className).toBe('')

      const div = output.props.children

      expect(div.type).toBe('div')
      expect(div.props.className).toBe('view')

      const [ input, label, button ] = div.props.children

      expect(input.type).toBe('input')
      expect(input.props.checked).toBe(false)

      expect(label.type).toBe('label')
      expect(label.props.children).toBe('Add a Category')

      expect(button.type).toBe('button')
      expect(button.props.className).toBe('destroy')
    })

    it('input onChange should call completeCategory', () => {
      const { output, props } = setup()
      const input = output.props.children.props.children[0]
      input.props.onChange({})
      expect(props.completeCategory).toBeCalledWith(0)
    })

    it('button onClick should call deleteCategory', () => {
      const { output, props } = setup()
      const button = output.props.children.props.children[2]
      button.props.onClick({})
      expect(props.deleteCategory).toBeCalledWith(0)
    })

    it('label onDoubleClick should put component in edit state', () => {
      const { output, renderer } = setup()
      const label = output.props.children.props.children[1]
      label.props.onDoubleClick({})
      const updated = renderer.getRenderOutput()
      expect(updated.type).toBe('li')
      expect(updated.props.className).toBe('editing')
    })

    it('edit state render', () => {
      const { output } = setup(true)

      expect(output.type).toBe('li')
      expect(output.props.className).toBe('editing')

      const input = output.props.children
      expect(input.type).toBe(CategoryTextInput)
      expect(input.props.text).toBe('Add a Category')
      expect(input.props.editing).toBe(true)
    })

    it('CategoryTextInput onSave should call editCategory', () => {
      const { output, props } = setup(true)
      output.props.children.props.onSave('Add a Category')
      expect(props.editCategory).toBeCalledWith(0, 'Add a Category')
    })

    it('CategoryTextInput onSave should call deleteCategory if text is empty', () => {
      const { output, props } = setup(true)
      output.props.children.props.onSave('')
      expect(props.deleteCategory).toBeCalledWith(0)
    })

    it('CategoryTextInput onSave should exit component from edit state', () => {
      const { output, renderer } = setup(true)
      output.props.children.props.onSave('Add a Category')
      const updated = renderer.getRenderOutput()
      expect(updated.type).toBe('li')
      expect(updated.props.className).toBe('')
    })
  })
})
