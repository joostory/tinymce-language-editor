import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'

import './modules/tinymce-polyfill'
import './ko_KR'
import modules from './modules'

import App from './containers/App'

const middleware = [ createLogger() ]

const store = createStore(
	modules,
	applyMiddleware(...middleware)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
