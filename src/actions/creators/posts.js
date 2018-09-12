import { ADD_POST, ADD_POST_SUCCESSFULLY } from '../types'

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
