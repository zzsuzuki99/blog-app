import { Url } from '../config'
const basePath = `${Url}/api`
const postApiUrl = `${basePath}/post`
export const getPostsRequest = () => {
  return {
    url: postApiUrl,
    method: 'get'
  }
}
