import { SHOW_LOADING, HIDE_LOADING } from '../../actions/types'
const initialState = { isLoading: false }

export default function (state = initialState, action) {
  console.log('Actions>>>', action)
  switch (action.type) {
    case HIDE_LOADING:
      return {
        isLoading: false
      }
    case SHOW_LOADING:
      return {
        isLoading: true
      }
    default:
      return state
  }
}
