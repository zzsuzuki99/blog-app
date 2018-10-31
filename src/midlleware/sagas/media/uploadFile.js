import { callApi } from '../../../api'
import { put } from 'redux-saga/effects'
import { getUploadFileRequest } from '../../../api/request/media'
import { uploadFileSuccessfully } from '../../../actions/creators/media'

export function * uploadFile (action) {
  const request = getUploadFileRequest(action.payload.file)
  const response = yield callApi(request)
  const url = response.data.url
  yield put(uploadFileSuccessfully(url))
}
