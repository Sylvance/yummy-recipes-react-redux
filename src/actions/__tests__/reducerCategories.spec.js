import reducer from '../../reducers/categories'
import * as types from '../../constants/ActionTypes'
 
describe('categories reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })
 
  it('should handle ADD_CATEGORY', () => {
    expect(
      reducer([], {
        type: types.ADD_CATEGORY,
        id: 2,
        title: 'Test',
        description: 'Test'
      })
    ).toEqual([
      {
        id: 2,
        title: 'Test',
        description: 'Test'
      }
    ])
  })

  it('should handle EDIT_CATEGORY', () => {
    expect(
    reducer([
        {
            id: 2,
            title: 'Test',
            description: 'Test'
        }
      ], {
        type: types.EDIT_CATEGORY,
        id: 2,
        title: 'Tested',
        description: 'Tested'
      })
    ).toEqual([
      {
        id: 2,
        title: 'Tested',
        description: 'Tested'
      }
    ])
  })

  it('should handle DELETE_CATEGORY', () => {
    expect(
        reducer([
        {
            id: 2,
            title: 'Test',
            description: 'Test'
        }
      ], {
        type: types.DELETE_CATEGORY,
        id: 2
      })
    ).toEqual([
      
    ])
  })

})
  