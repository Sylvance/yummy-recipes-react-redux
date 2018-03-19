import reducer from '../../reducers/meta'
import * as types from '../../constants/ActionTypes'
 
describe('meta reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual({
        pages: null,
        total: null,
        limit: null,
        links: {}
      })
    })
   
    it('should handle PAGINATE', () => {
      expect(
        reducer([], {
          type: types.PAGINATE,
          meta: {
              pages: 1,
              total: 3,
              limit: 3,
              links: {
                  'first': 'api/link/1',
                  'last': 'api/link/3'
              }
          }
        })
      ).toEqual(
        {
            pages: 1,
            total: 3,
            limit: 3,
            links: {
                'first': 'api/link/1',
                'last': 'api/link/3'
            }
        }
      )
    })
  
  })
  