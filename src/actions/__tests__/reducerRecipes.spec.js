import reducer from '../../reducers/recipes'
import * as types from '../../constants/ActionTypes'
 
describe('recipes reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual([])
    })
   
    it('should handle ADD_RECIPE', () => {
      expect(
        reducer([], {
          type: types.ADD_RECIPE,
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
  
    it('should handle EDIT_RECIPE', () => {
      expect(
      reducer([
          {
              id: 2,
              title: 'Test',
              description: 'Test'
          }
        ], {
          type: types.EDIT_RECIPE,
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
  
    it('should handle DELETE_RECIPE', () => {
      expect(
          reducer([
          {
              id: 2,
              title: 'Test',
              description: 'Test'
          }
        ], {
          type: types.DELETE_RECIPE,
          id: 2
        })
      ).toEqual([
        
      ])
    })
  
  })
  