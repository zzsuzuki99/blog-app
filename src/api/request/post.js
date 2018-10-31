import { Url } from '../config'
const basePath = `${Url}/api`
const postApiUrl = `${basePath}/post`
export const getPostsRequest = () => {
  return {
    url: postApiUrl,
    method: 'get'
  }
}

export const addPostsRequest = post => {
  return {
    url: postApiUrl,
    method: 'post',
    data: {
      content: post.content,
      title: 'title'
    }
  }
}
