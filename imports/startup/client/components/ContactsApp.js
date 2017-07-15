import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';

import ContactsList from './ContactsList'
import Footer from './Footer'
import Header from './Header'
import AddContactForm from './AddContactForm'
// import AccountsUIWrapper from './AccountsUIWrapper';
import DevTools from './DevTools';
import asteroid from '../configure-asteroid'
import { logout } from '../actions';


class ContactsApp extends Component {
  constructor(props){
    super(props);
    this.state = { isAuthenticated: asteroid.loggedIn};

  }

  render(){
    // let isAuthenticated = this.state.isAuthenticated;
    let isAuthenticated = true;
    // console.log('ASTEROID in ContactsApp', asteroid);
    // console.log("store here", this.props);


    return(
      <div>
        <Header history={this.props.history}/>
        {
            isAuthenticated ?
              <div className='container'>

                <div className='col-xs-offset-0 col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-3 col-md-6'>
                  <AddContactForm />
                  <Footer />
                  <ContactsList />
                </div>
              </div>
          : <h1> :( </h1>

        }

      </div>

    )
  }

}

export default ContactsApp;
