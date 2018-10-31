import { takeLatest } from 'redux-saga/effects'
import { UPLOAD_FILE, GET_ALL_MEDIA } from '../../../actions/types'
import { uploadFile } from './uploadFile'
import getAllMedia from './getAllMedia'

export function * mediaSagas () {
  yield takeLatest(UPLOAD_FILE, uploadFile)
  yield takeLatest(GET_ALL_MEDIA, getAllMedia)
}
