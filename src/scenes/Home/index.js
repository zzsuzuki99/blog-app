import React, { Component } from 'react'
import Post from '../../components/Post'
import './styles.css'
import withNavBar from '../withNavBar'
import { connect } from 'react-redux'
const posts = [1, 2, 2, 2, 2, 2, 2, 2]
class HomeScreen extends Component {
  render () {
    console.log('Post>>>', this.props.posts)
    return (
      <div className="Home">
        {this.props.posts.map((item, index) => (
          <Post key={index} />
        ))}
      </div>
    )
  }
}

const EnhanceHomeScreen = withNavBar(HomeScreen)

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(mapStateToProps)(EnhanceHomeScreen)
