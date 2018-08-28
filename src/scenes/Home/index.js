import React, { Component } from 'react'
import logo from '../../logo.svg'
import NavBarComponent from '../../components/Nav'
class Home extends Component {
  render () {
    return (
      <div className="Home">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <nav>
          <NavBarComponent />
        </nav>
      </div>
    )
  }
}

export default Home
