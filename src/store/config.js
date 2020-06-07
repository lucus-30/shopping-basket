import { createStore, compose, applyMiddleware, combineReducers } from "redux"
import { createLogger } from "redux-logger"
import * as reducers from "reducers"

const logger = createLogger()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default preloadedState => {
  return createStore(
    combineReducers(reducers),
    preloadedState,
    composeEnhancers(applyMiddleware(logger))
  )
}