import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import ContactsApp from './ContactsApp'
import configureStore from '../configure-store'

const routes =
  <Provider store={configureStore()}>
    <HashRouter>
      <Route path="/" component={ContactsApp} />
    </HashRouter>
  </Provider>;


export default routes;
