import { PAGINATE } from '../constants/ActionTypes'

const initialState = {
  pages: null,
  total: null,
  limit: null,
  links: {}
}

export default function meta(state = initialState, action) {
  switch (action.type) {
    case PAGINATE:
    return {
      ...{
        pages: action.meta.pages,
        total: action.meta.total,
        limit: action.meta.limit,
        links: action.meta.links
      }
    }

    default:
      return state
  }
}
