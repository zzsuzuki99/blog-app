import React, { Component } from 'react'
// import './styles.css'
import withNavBar from '../withNavBar'
import { selectAllPost } from '../../selector/post'
import { connect } from 'react-redux'

class PostDetailsScreen extends Component {
  componentDidMount () {
    const currentPost = this.getPostById(this.props.match.params.postId)
    if (currentPost) {
      this.container.innerHTML = currentPost.content
    }
  }

  getPostById (id) {
    if (this.props.posts) {
      const post = this.props.posts.find(post => {
        return post.id === id
      })
      return post
    }
    return null
  }

  render () {
    return <div className="container" ref={ref => (this.container = ref)} />
  }
}

const EnhancePostDetailsScreen = withNavBar(PostDetailsScreen)
const mapStateToProps = state => ({
  posts: selectAllPost(state)
})

export default connect(mapStateToProps)(EnhancePostDetailsScreen)
