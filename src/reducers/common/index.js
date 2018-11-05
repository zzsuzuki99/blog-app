import {
  ADD_POST,
  GET_POSTS_SUCCESSFULLY,
  GET_ALL_MEDIA_SUCCESSFULLY,
  UPLOAD_FILE_SUCCESSFULLY
} from '../../actions/types'
import handlePost from './posts'
import _ from 'lodash'
const initialState = {
  files: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_SUCCESSFULLY:
    case ADD_POST:
      return handlePost(state, action)
    case GET_ALL_MEDIA_SUCCESSFULLY: {
      return {
        ...state,
        files: action.payload.files
      }
    }
    case UPLOAD_FILE_SUCCESSFULLY: {
      var tempFiles = _.map(state.files, _.clone)
      tempFiles.push({ url: action.payload.url })
      console.log('State>>>', state)
      return {
        ...state,
        files: tempFiles
      }
    }
    default:
      return state
  }
}
