import React, { Component } from 'react'
import Post from '../../components/Post'
// import './styles.css'
import withNavBar from '../withNavBar'

class CreateOrEditPostScreen extends Component {
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

const EnhanceCreateOrEditPostScreen = withNavBar(CreateOrEditPostScreen)

export default EnhanceCreateOrEditPostScreen
