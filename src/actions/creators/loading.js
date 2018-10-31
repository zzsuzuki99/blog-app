import { SHOW_LOADING, HIDE_LOADING } from '../types'

export const showLoading = post => ({
  type: SHOW_LOADING
})

export const hideLoading = post => ({
  type: HIDE_LOADING
})
