import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import HomeScreen from './scenes/Home'
import CreateOrEditPostScreen from './scenes/CreateOrEditPost'
import PostDetailsScreen from './scenes/PostDetails'
import NavBar from './components/NavBar'
import LoadingComponent from './components/Loading'

class App extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/create-post" component={CreateOrEditPostScreen} />
          <Route path="/post-details/:postId" component={PostDetailsScreen} />
        </Switch>
        <LoadingComponent />
      </div>
    )
  }
}

export default App
