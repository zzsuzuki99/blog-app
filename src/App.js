import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import HomeScreen from './scenes/Home'
import CreateOrEditPostScreen from './scenes/CreateOrEditPost'
import PostDetailsScreen from './scenes/PostDetails'

class App extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path="/home" component={HomeScreen} />
          <Route path="/create-post" component={CreateOrEditPostScreen} />
          <Route path="/post-details" component={PostDetailsScreen} />
        </Switch>
      </div>
    )
  }
}

export default App
