import { combineReducers } from 'redux'
import categories from './categories'
import recipes from './recipes'
import meta from './meta'
import authReducer from './auth'

const rootReducer = combineReducers({
  categories : categories,
  recipes : recipes,
  meta: meta,
  auth: authReducer 
})

export default rootReducer
