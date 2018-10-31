import { callApi } from '../../../../api'
import { put } from 'redux-saga/effects'
import { getAllMediaRequest } from '../../../../api/request/media'
import { getAllMediaSuccessfully } from '../../../../actions/creators/media'

export default function * (action) {
  const request = getAllMediaRequest()
  const response = yield callApi(request)
  const files = response.data.data
  console.log('123', files)
  yield put(getAllMediaSuccessfully(files))
}
