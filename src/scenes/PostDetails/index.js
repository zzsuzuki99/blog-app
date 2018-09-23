import React, { Component } from 'react'
// import './styles.css'
import withNavBar from '../withNavBar'
import { getPosts } from '../../selector/post'
import { connect } from 'react-redux'

class PostDetailsScreen extends Component {
  componentDidMount () {
    const currentPost = this.getPostById(this.props.match.params.postId)
    if (currentPost) {
      this.container.innerHTML = currentPost.content.content
    }
  }

  getPostById (id) {
    if (this.props.posts) {
      const post = this.props.posts.find(post => post.id === id)
      console.log('data>>>', post, id)
      return this.props.posts[0]
    }
    return null
  }

  render () {
    return <div className="container" ref={ref => (this.container = ref)} />
  }
}

const EnhancePostDetailsScreen = withNavBar(PostDetailsScreen)
const mapStateToProps = state => ({
  posts: getPosts(state)
})

export default connect(mapStateToProps)(EnhancePostDetailsScreen)
