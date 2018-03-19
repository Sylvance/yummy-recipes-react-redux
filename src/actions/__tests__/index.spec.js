import * as actions from '../../actions/index'
import * as types from '../../constants/ActionTypes'
 
describe('category actions', () => {
  it('should create an action to add a category', () => {
    const res = {
      'id': 1,
      'title': 'Category',
      'description': 'description'
    }
    const expectedAction = { type: types.ADD_CATEGORY, id: res.id, title: res.title, description: res.description} 
    expect(actions.createCategory(res)).toEqual(expectedAction)
  })
  it('should create an action to delete a category', () => {
    const res = {
      'id': 1
    }
    const expectedAction = { type: types.DELETE_CATEGORY, id: res.id } 
    expect(actions.removeCategory(res)).toEqual(expectedAction)
  })
  it('should create an action to edit a category', () => {
    const res = {
      'id': 1,
      'title': 'Category',
      'description': 'description'
    }
    const expectedAction = { type: types.EDIT_CATEGORY, id: res.id, title: res.title, description: res.description  }
    expect(actions.updateCategory(res)).toEqual(expectedAction)
  })
})

describe('Recipe actions', () => {
  it('should create an action to add a Recipe', () => {
    const res = {
      'id': 1,
      'title': 'Recipe',
      'description': 'description'
    }
    const expectedAction = { type: types.ADD_RECIPE, id: res.id, title: res.title, description: res.description} 
    expect(actions.createRecipe(res)).toEqual(expectedAction)
  })
  it('should create an action to delete a Recipe', () => {
    const res = {
      'id': 1
    }
    const expectedAction = { type: types.DELETE_RECIPE, id: res.id } 
    expect(actions.removeRecipe(res)).toEqual(expectedAction)
  })
  it('should create an action to edit a Recipe', () => {
    const res = {
      'id': 1,
      'title': 'Recipe',
      'description': 'description'
    }
    const expectedAction = { type: types.EDIT_RECIPE, id: res.id, title: res.title, description: res.description  }
    expect(actions.updateRecipe(res)).toEqual(expectedAction)
  })
})
