import {
  UPLOAD_FILE,
  UPLOAD_FILE_SUCCESSFULLY,
  GET_ALL_MEDIA,
  GET_ALL_MEDIA_SUCCESSFULLY
} from '../types'

export const uploadFile = file => ({
  type: UPLOAD_FILE,
  payload: {
    file
  }
})

export const uploadFileSuccessfully = url => ({
  type: UPLOAD_FILE_SUCCESSFULLY,
  payload: {
    url
  }
})

export const getAllMedia = () => ({
  type: GET_ALL_MEDIA
})

export const getAllMediaSuccessfully = files => ({
  type: GET_ALL_MEDIA_SUCCESSFULLY,
  payload: {
    files
  }
})
