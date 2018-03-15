import * as types from '../constants/ActionTypes'
import * as actions from './index'

describe('category actions', () => {
  it('addCategory should create ADD_CATEGORY action', () => {
    expect(actions.addCategory('Add a Category')).toEqual({
      type: types.ADD_CATEGORY,
      text: 'Add a Category'
    })
  })

  it('deleteCategory should create DELETE_CATEGORY action', () => {
    expect(actions.deleteCategory(1)).toEqual({
      type: types.DELETE_CATEGORY,
      id: 1
    })
  })

  it('editCategory should create EDIT_CATEGORY action', () => {
    expect(actions.editCategory(1, 'Add a Category everywhere')).toEqual({
      type: types.EDIT_CATEGORY,
      id: 1,
      text: 'Add a Category everywhere'
    })
  })

  it('completeCategory should create COMPLETE_CATEGORY action', () => {
    expect(actions.completeCategory(1)).toEqual({
      type: types.COMPLETE_CATEGORY,
      id: 1
    })
  })

  it('completeAll should create COMPLETE_ALL action', () => {
    expect(actions.completeAll()).toEqual({
      type: types.COMPLETE_ALL
    })
  })

  it('clearCompleted should create CLEAR_COMPLETED action', () => {
    expect(actions.clearCompleted()).toEqual({
      type: types.CLEAR_COMPLETED
    })
  })
})
