import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import CategoryTextInput from './CategoryTextInput'

const setup = propOverrides => {
  const props = Object.assign({
    onSave: jest.fn(),
    text: 'Add a Category',
    placeholder: 'What needs to be done?',
    editing: false,
    newCategory: false
  }, propOverrides)

  const renderer = createRenderer()

  renderer.render(
    <CategoryTextInput {...props} />
  )

  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('CategoryTextInput', () => {
    it('should render correctly', () => {
      const { output } = setup()
      expect(output.props.placeholder).toEqual('What needs to be done?')
      expect(output.props.value).toEqual('Add a Category')
      expect(output.props.className).toEqual('')
    })

    it('should render correctly when editing=true', () => {
      const { output } = setup({ editing: true })
      expect(output.props.className).toEqual('edit')
    })

    it('should render correctly when newCategory=true', () => {
      const { output } = setup({ newCategory: true })
      expect(output.props.className).toEqual('new-category')
    })

    it('should update value on change', () => {
      const { output, renderer } = setup()
      output.props.onChange({ target: { value: 'Use Radox' } })
      const updated = renderer.getRenderOutput()
      expect(updated.props.value).toEqual('Use Radox')
    })

    it('should call onSave on return key press', () => {
      const { output, props } = setup()
      output.props.onKeyDown({ which: 13, target: { value: 'Add a Category' } })
      expect(props.onSave).toBeCalledWith('Add a Category')
    })

    it('should reset state on return key press if newCategory', () => {
      const { output, renderer } = setup({ newCategory: true })
      output.props.onKeyDown({ which: 13, target: { value: 'Add a Category' } })
      const updated = renderer.getRenderOutput()
      expect(updated.props.value).toEqual('')
    })

    it('should call onSave on blur', () => {
      const { output, props } = setup()
      output.props.onBlur({ target: { value: 'Add a Category' } })
      expect(props.onSave).toBeCalledWith('Add a Category')
    })

    it('shouldnt call onSave on blur if newCategory', () => {
      const { output, props } = setup({ newCategory: true })
      output.props.onBlur({ target: { value: 'Add a Category' } })
      expect(props.onSave).not.toBeCalled()
    })
  })
})
