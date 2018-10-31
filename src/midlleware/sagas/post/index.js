import { takeLatest } from 'redux-saga/effects'
import { GET_POSTS, ADD_POST } from '../../../actions/types'
import { getPost } from './getPost'
import { addPost } from './addPost'

export function * postSagas () {
  yield takeLatest(GET_POSTS, getPost)
  yield takeLatest(ADD_POST, addPost)
}
