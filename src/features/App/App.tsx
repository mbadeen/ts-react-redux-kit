import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Home from '../Pages/Home'
import '../../styles/globals.css'

const App = (): JSX.Element => (
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
)

export default App
