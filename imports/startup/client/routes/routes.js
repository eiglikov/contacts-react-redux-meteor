import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import configureStore from '../configure-store'

// pages
import SignupPage from '../components/Authentication/SignupPage'
import LoginPage from '../components/Authentication/LoginPage'

import Header from '../components/Pages/Header'
import ContactsApp from '../components/ContactsApp'
import HomeWelcome from '../components/Pages/HomeWelcome'
import NotFound from '../components/Pages/NotFound'

const routes =
<Provider store={configureStore()}>
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomeWelcome} />
        <Route path="/group/:filter" component={ContactsApp} />
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/signup" component={SignupPage}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </BrowserRouter>
</Provider>


export default routes
