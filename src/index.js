import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from '../src/scenes/Home'
import App from './App'
import PostDetails from '../src/scenes/PostDetails'
import registerServiceWorker from './registerServiceWorker'
import CreateOrEditPostScreen from './scenes/CreateOrEditPost'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../src/reducers'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
