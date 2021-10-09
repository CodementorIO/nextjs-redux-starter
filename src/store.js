import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { createLogger } from 'redux-logger'
import config from 'config'
import { repoSearchReducer } from 'features/repoSearch/repoSearchSlice'

export const createStore = (preloadedState) => {
  const middlewares = []

  if (config.env === 'development' && typeof window !== 'undefined') {
    const logger = createLogger({
      level: 'info',
      collapsed: true
    })

    middlewares.push(logger)
  }

  return configureStore({
    reducer: {
      repoSearch: repoSearchReducer
    },
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...middlewares),
    devTools: config.env === 'development'
  })
}

let store
const initializeStore = (preloadedState) => {
  let _store = store || createStore(preloadedState)

  if (preloadedState && store) {
    _store = createStore({ ...store.getState(), ...preloadedState })
    store = undefined
  }

  if (typeof window === 'undefined') {
    return _store
  }

  if (!store) {
    store = _store
  }

  return store
}

export const useStore = (preloadedState) => initializeStore(preloadedState)

export const useAppDispatch = () => useDispatch()

export const useAppSelector = useSelector
