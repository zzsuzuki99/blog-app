import { getPostsRequest } from '../../../api/request/post'
import { callApi } from '../../../api'
import { getPostsSuccessfully } from '../../../actions/creators/posts'
import { put } from 'redux-saga/effects'

export function * getPost (action) {
  const request = getPostsRequest()
  const response = yield callApi(request)
  const posts = response.data.data
  yield put(getPostsSuccessfully(posts))
}
