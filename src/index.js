import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from '../src/scenes/Home'
import App from './App'
import PostDetails from '../src/scenes/PostDetails'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<PostDetails />, document.getElementById('root'))
registerServiceWorker()
