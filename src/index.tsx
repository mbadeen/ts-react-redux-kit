import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import App from './features/App'
import store from './redux/store'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
