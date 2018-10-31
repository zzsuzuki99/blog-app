import { addPostsRequest } from '../../../api/request/post'
import { callApi } from '../../../api'
import { addPostSuccessfully } from '../../../actions/creators/posts'
import { put } from 'redux-saga/effects'

export function * addPost (action) {
  const request = addPostsRequest(action.payload.post)
  const response = yield callApi(request)
  const post = {
    ...action.payload.post,
    id: response.data.id
  }
  yield put(addPostSuccessfully(post))
  console.log(
    'callback123>>>>',
    action.payload.callback,
    typeof action.payload.callback
  )
  action.payload.callback()
}
