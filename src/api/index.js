import axios from 'axios'

export function * callApi (request) {
  try {
    console.log('Request>>>', request)
    const response = yield axios(request)
    console.log('Response>>>', response.data)
    return response.data
  } catch (err) {
    console.log('Error>>>', err)
  }
}
