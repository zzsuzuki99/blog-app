import React, { Component } from 'react'
import Post from '../../components/Post'
// import './styles.css'
import withNavBar from '../withNavBar'

const posts = [1, 2, 2, 2, 2, 2, 2, 2]
class PostDetailsScreen extends Component {
  render () {
    return (
      <div className="post-details">
        {posts.map((item, index) => (
          <Post key={index} />
        ))}
      </div>
    )
  }
}

const EnhancePostDetailsScreen = withNavBar(PostDetailsScreen)

export default EnhancePostDetailsScreen
