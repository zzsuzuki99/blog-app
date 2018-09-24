import { ADD_POST, GET_POSTS_SUCCESSFULLY } from '../../actions/types'
import handlePost from './posts'
const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_SUCCESSFULLY:
    case ADD_POST:
      return handlePost(state, action)
    default:
      return state
  }
}
