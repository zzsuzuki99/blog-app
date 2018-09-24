import { ADD_POST, GET_POSTS_SUCCESSFULLY } from '../../actions/types'

const initialState = {
  posts: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.push({
          id: state.length,
          content: action.payload.post
        })
      }
    case GET_POSTS_SUCCESSFULLY:
      const posts = action.payload.posts || []
      return {
        ...state,
        posts
      }
    default:
      return state
  }
}