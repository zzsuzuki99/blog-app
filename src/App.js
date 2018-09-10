import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import HomeScreen from './scenes/Home'
import CreateOrEditPostScreen from './scenes/CreateOrEditPost'

class App extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/create-post" component={CreateOrEditPostScreen} />
        </Switch>
      </div>
    )
  }
}

export default App
