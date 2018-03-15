import { GET_RECIPES, ADD_RECIPE, DELETE_RECIPE, EDIT_RECIPE } from '../constants/ActionTypes'

const initialState = [
]

export default function recipes(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return [ ...action.recipes ]

    case ADD_RECIPE:
      return [
        ...state,
        {
          id: action.id,
          title: action.title, 
          description: action.description
        }
      ]

    case DELETE_RECIPE:
      return state.filter(recipe =>
        recipe.id !== action.id
      )

    case EDIT_RECIPE:
      return state.map(recipe =>
        recipe.id === action.id ?
          { ...recipe, title: action.title, description: action.description } :
          recipe
      )

    default:
      return state
  }
}
