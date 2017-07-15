import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import configureStore from '../configure-store';
import Header from './Header'

// pages
import ContactsApp from './ContactsApp';
import HomeWelcome from './HomeWelcome';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';

// const store = configureStore();

const routes =
<Provider store={configureStore()}>
  <BrowserRouter>
    <div>
      <Route exact path="/" component={HomeWelcome} />
      <Route path="/group/:filter" component={ContactsApp} />
      <Route exact path="/login" component={LoginPage}/>
      <Route exact  path="/signup" component={SignupPage}/>
    </div>
  </BrowserRouter>
</Provider>;


export default routes;
