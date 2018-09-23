import { ADD_POST } from '../actions/types'

const initialState = []

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      state.push({ id: state.length, content: action.payload.post })
      return state
    default:
      return state
  }
}
