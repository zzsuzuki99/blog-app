import React, { Component } from 'react'
import Post from '../../components/Post'
import './styles.css'
import withNavBar from '../withNavBar'

const posts = [1, 2, 2, 2, 2, 2, 2, 2]
class HomeScreen extends Component {
  render () {
    return (
      <div className="Home">
        {posts.map((item, index) => (
          <Post key={index} />
        ))}
      </div>
    )
  }
}

const EnhanceHomeScreen = withNavBar(HomeScreen)

export default EnhanceHomeScreen
