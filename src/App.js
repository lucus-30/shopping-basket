import React from "react"
import { hot } from "react-hot-loader"
import { Provider } from "react-redux"
import BasketContainer from "containers/BasketContainer"

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <div className="app">
        <BasketContainer />
      </div>
    </Provider>
  )
}

export default hot(module)(App)
