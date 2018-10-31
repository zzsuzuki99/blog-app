import { Url } from '../config'
import FormData from 'form-data'
const basePath = `${Url}/api`
const fileApiUrl = `${basePath}/file`

export const getUploadFileRequest = file => {
  var form = new FormData()
  form.append('file', file)
  console.log('file', form)
  return {
    url: `${fileApiUrl}/upload`,
    method: 'post',
    data: form,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
}

export const getAllMediaRequest = () => {
  return {
    url: `${basePath}/files`,
    method: 'get'
  }
}

// export const addPostsRequest = post => {
//   return {
//     url: postApiUrl,
//     method: 'post',
//     data: {
//       content: post.content,
//       title: 'title'
//     }
//   }
// }
