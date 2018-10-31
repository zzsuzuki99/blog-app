import { postSagas } from './sagas/post'
import { all } from 'redux-saga/effects'
import { mediaSagas } from './sagas/media'

export default function * sagas () {
  yield all([postSagas(), mediaSagas()])
}
