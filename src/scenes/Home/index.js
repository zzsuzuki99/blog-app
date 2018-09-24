import React, { Component } from 'react'
import Post from '../../components/Post'
import './styles.css'
import withNavBar from '../withNavBar'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPosts } from '../../actions/creators/posts'
import { selectAllPost } from '../../selector/post'

class HomeScreen extends Component {
  componentDidMount () {
    this.props.getPosts()
  }

  render () {
    return (
      <div className="container">
        {this.props.posts.map((item, index) => (
          <Post key={index} postId={item.id} />
        ))}
      </div>
    )
  }
}

const EnhanceHomeScreen = withNavBar(HomeScreen)

const mapStateToProps = state => ({
  posts: selectAllPost(state)
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPosts
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnhanceHomeScreen)
