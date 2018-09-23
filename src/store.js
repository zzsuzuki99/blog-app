import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../src/reducers'
import createSagaMiddleware from 'redux-saga'
import sagas from './midlleware'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(sagas)

export default store
