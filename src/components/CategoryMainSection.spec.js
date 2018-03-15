import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import CategoryMainSection from './CategoryMainSection'
import CategoryItem from './CategoryItem'
import CategoryFooter from './CategoryFooter'
import { SHOW_ALL, SHOW_COMPLETED } from '../constants/Filters'

const setup = propOverrides => {
  const props = Object.assign({
    categories: [
      {
        text: 'Add a Category',
        completed: false,
        id: 0
      }, {
        text: 'Run the tests',
        completed: true,
        id: 1
      }
    ],
    actions: {
      editCategory: jest.fn(),
      deleteCategory: jest.fn(),
      completeCategory: jest.fn(),
      completeAll: jest.fn(),
      clearCompleted: jest.fn()
    }
  }, propOverrides)

  const renderer = createRenderer()
  renderer.render(<CategoryMainSection {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('CategoryMainSection', () => {
    it('should render container', () => {
      const { output } = setup()
      expect(output.type).toBe('section')
      expect(output.props.className).toBe('main')
    })

    describe('toggle all input', () => {
      it('should render', () => {
        const { output } = setup()
        const [ toggle ] = output.props.children[0].props.children
        expect(toggle.type).toBe('input')
        expect(toggle.props.type).toBe('checkbox')
        expect(toggle.props.checked).toBe(false)
      })

      it('should be checked if all categories completed', () => {
        const { output } = setup({ categories: [
          {
            text: 'Add a Category',
            completed: true,
            id: 0
          }
        ]
        })
        const [ toggle ] = output.props.children[0].props.children
        expect(toggle.props.checked).toBe(true)
      })

      it('should call completeAll on change', () => {
        const { output, props } = setup()
        const [ , label ] = output.props.children[0].props.children
        label.props.onClick({})
        expect(props.actions.completeAll).toBeCalled()
      })
    })

    describe('footer', () => {
      it('should render', () => {
        const { output } = setup()
        const [ , , footer ] = output.props.children
        expect(footer.type).toBe(Footer)
        expect(footer.props.completedCount).toBe(1)
        expect(footer.props.activeCount).toBe(1)
        expect(footer.props.filter).toBe(SHOW_ALL)
      })

      it('onShow should set the filter', () => {
        const { output, renderer } = setup()
        const [ , , footer ] = output.props.children
        footer.props.onShow(SHOW_COMPLETED)
        const updated = renderer.getRenderOutput()
        const [ , , updatedFooter ] = updated.props.children
        expect(updatedFooter.props.filter).toBe(SHOW_COMPLETED)
      })

      it('onClearCompleted should call clearCompleted', () => {
        const { output, props } = setup()
        const [ , , footer ] = output.props.children
        footer.props.onClearCompleted()
        expect(props.actions.clearCompleted).toBeCalled()
      })
    })

    describe('category list', () => {
      it('should render', () => {
        const { output, props } = setup()
        const [ , list ] = output.props.children
        expect(list.type).toBe('ul')
        expect(list.props.children.length).toBe(2)
        list.props.children.forEach((item, i) => {
          expect(item.type).toBe(CategoryItem)
          expect(item.props.category).toBe(props.categories[i])
        })
      })

      it('should filter items', () => {
        const { output, renderer, props } = setup()
        const [ , , footer ] = output.props.children
        footer.props.onShow(SHOW_COMPLETED)
        const updated = renderer.getRenderOutput()
        const [ , updatedList ] = updated.props.children
        expect(updatedList.props.children.length).toBe(1)
        expect(updatedList.props.children[0].props.category).toBe(props.categories[1])
      })
    })
  })
})
