import {
  ADD_POST,
  GET_POSTS_SUCCESSFULLY,
  GET_ALL_MEDIA_SUCCESSFULLY
} from '../../actions/types'
import handlePost from './posts'
const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_SUCCESSFULLY:
    case ADD_POST:
      return handlePost(state, action)
    case GET_ALL_MEDIA_SUCCESSFULLY: {
      return {
        ...state,
        files: action.payload.files
      }
    }
    default:
      return state
  }
}
