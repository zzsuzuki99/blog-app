import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from 'react-bootstrap'

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button bsStyle="danger" onClick={() => console.log('Click')}>
          Hello World Danger
        </Button>
        <Button bsStyle="primary">Hello World Primary</Button>
        <Button bsStyle="success">Hello World Success</Button>
        <div className="container-button">
          <button type="button" className="btn">
            Basic
          </button>
          <button type="button" className="btn btn-default">
            Default
          </button>
          <button type="button" className="btn btn-primary">
            Primary
          </button>
          <button type="button" className="btn btn-success">
            Success
          </button>
          <button type="button" className="btn btn-info">
            Info
          </button>
          <button type="button" className="btn btn-warning">
            Warning
          </button>
          <button type="button" className="btn btn-danger">
            Danger
          </button>
          <button type="button" className="btn btn-link">
            Link
          </button>
        </div>
      </div>
    )
  }
}

export default App
