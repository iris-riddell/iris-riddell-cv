import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'

import App from './components/App'
import Portfolio from './components/Portfolio'
import AboutMe from './components/AboutMe'
import WorkHistory from './components/WorkHistory'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HashRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/aboutme' component={AboutMe} />
        <Route path='/workhistory' component={WorkHistory} />
      </Switch>
    </HashRouter>,
    document.getElementById('app')
  )
})
