import Immutable from 'immutable'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'

import config from 'config'
import rootReducer from '../reducers'

function createMiddlewares ({ isServer }) {
  let middlewares = [
    thunkMiddleware
  ]

  if (config.env === 'development' && typeof window !== 'undefined') {
    middlewares.push(createLogger({
      level: 'info',
      collapsed: true,
      stateTransformer: (state) => {
        let newState = {}

        for (let i of Object.keys(state)) {
          if (Immutable.Iterable.isIterable(state[i])) {
            newState[i] = state[i].toJS()
          } else {
            newState[i] = state[i]
          }
        }

        return newState
      }
    }))
  }

  return middlewares
}

function immutableChildren (obj) {
  let state = {}
  Object.keys(obj).forEach((key) => {
    state[key] = Immutable.fromJS(obj[key])
  })
  return state
}

export default (initialState = {}, context) => {
  let { isServer } = context
  let middlewares = createMiddlewares({ isServer })
  let state = immutableChildren(initialState)

  return createStore(
    rootReducer,
    state,
    compose(applyMiddleware(...middlewares))
  )
}
