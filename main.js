import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'

import Counter from './Counter'
import {usersReducer, counterReducer} from './reducers'

import rootSaga from './sagas'

const reducers = combineReducers({
  counter: counterReducer,
  users: usersReducer
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({type})

function render() {

  const {counter} = store.getState()
  ReactDOM.render(
    <Counter
      value={counter}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')} 
      onIncrementAsync={() => action('INCREMENT_ASYNC')}
      />,
    document.getElementById('root')
  )
}



render()
store.subscribe(render)
