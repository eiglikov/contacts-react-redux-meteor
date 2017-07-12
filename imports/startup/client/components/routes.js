import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import ContactsApp from './ContactsApp'
import store from '../configure-store'
import { Meteor } from 'meteor/meteor';

// pages
import SignupPage from './SignupPage'
import LoginPage from './LoginPage'

const routes =
<Provider store={store}>
  <BrowserRouter>
    <div>
      <Route path="/login" component={LoginPage}/>
      <Route path="/signup" component={SignupPage}/>
      <Route path="/" exact={true} component={ContactsApp} />
    </div>
  </BrowserRouter>
</Provider>;


export default routes;
