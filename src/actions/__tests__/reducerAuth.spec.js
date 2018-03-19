import reducer from '../../reducers/auth'
import * as types from '../../constants/ActionTypes'
 
describe('auth reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual({"message": "", "registering": false})
    })
   
    it('should handle LOGIN_USER', () => {
      expect(
        reducer([], {
          type: types.LOGIN_USER,
          message: "User Logged in successfully",
          registering: false
        })
      ).toEqual(
        {
          message: "User Logged in successfully",
          registering: false
        }
      )
    })
  
  })
  