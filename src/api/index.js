import axios from 'axios'
import { put } from 'redux-saga/effects'
import { showLoading, hideLoading } from '../actions/creators/loading'

export function * callApi (request) {
  try {
    yield put(showLoading())
    console.log('Request>>>', request)
    const response = yield axios(request)
    console.log('Response>>>', response)
    yield put(hideLoading())
    return response
  } catch (err) {
    console.log('Error>>>', err)
  }
}
