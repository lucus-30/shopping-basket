import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import "normalize.css"
import App from "./App"
import configureStore from "./store/config"
import * as serviceWorker from "./serviceWorker"

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root"),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
