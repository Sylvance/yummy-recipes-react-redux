import { LOGIN_USER, REGISTER_USER } from '../constants/ActionTypes'

const initialState = {
  message: '',
  registering: false
}

export default (state = initialState, action) => {
  switch (action.type) {
      
    case LOGIN_USER:
      return { 
        ...{
          message: action.message,
          registering: false
        }
      };
        
    
      case REGISTER_USER:
      return [
        ...{
          message: action.message,
          registering: action.registering
        }
      ]

    default:
      return state
  }
}
