import { takeLatest } from 'redux-saga/effects'
import { GET_POSTS } from '../../../actions/types'
import { getPost } from './getPost'

export function * postSagas () {
  yield takeLatest(GET_POSTS, getPost)
}
