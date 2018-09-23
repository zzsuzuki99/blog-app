export const getPostById = (state, id) => {
  const posts = state.posts
  if (posts) {
    const post = posts.find(post => post.id === id)
    return post
  }
  return null
}

export const getPosts = (state, id) => {
  const posts = state.posts
  return posts
}
