import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import asyncComponent from '@/utils/asyncComponent'

const login = asyncComponent(() => import('@/pages/login/login'))

export default class RouteConfig extends Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route path='/login' component={login} />
        </Switch>
      </HashRouter>
    )
  }
}