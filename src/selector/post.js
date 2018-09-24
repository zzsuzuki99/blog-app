export const selectPostById = (state, id) => {
  const posts = selectAllPost(state)
  if (posts) {
    const post = posts.find(post => post.id === id)
    return post
  }
  return null
}

export const selectAllPost = (state, id) => {
  const posts = state.common.posts
  return posts || []
}
