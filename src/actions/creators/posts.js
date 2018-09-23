import {
  ADD_POST,
  ADD_POST_SUCCESSFULLY,
  GET_POSTS,
  GET_POSTS_SUCCESSFULLY
} from '../types'

export const addPost = post => ({
  type: ADD_POST,
  payload: {
    post
  }
})

export const addPostSuccessfully = post => ({
  type: ADD_POST_SUCCESSFULLY,
  payload: {
    post
  }
})

export const getPosts = () => ({
  type: GET_POSTS
})

export const getPostsSuccessfully = posts => ({
  type: GET_POSTS_SUCCESSFULLY,
  payload: {
    posts
  }
})
