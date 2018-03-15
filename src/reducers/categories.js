import { GET_CATEGORIES, ADD_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY } from '../constants/ActionTypes'

const initialState = [
]

export default function categories(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return [ ...action.categories ]
      
    case ADD_CATEGORY:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          description: action.description
        }
      ]

    case DELETE_CATEGORY:
      return state.filter(category =>
        category.id !== action.id
      )

    case EDIT_CATEGORY:
      return state.map(category =>
        category.id === action.id ?
          { ...category, title: action.title, description: action.description } :
          category
      )

    default:
      return state
  }
}
