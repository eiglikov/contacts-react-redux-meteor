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


class ContactsApp extends Component {
  constructor(props){
    super(props);
    this.state = this.getMeteorData();
    // this.state = {
    //   isAuthenticated: true
    // }
    // console.log("meteordata", this.state);

    // this.handleLogout = this.handleLogout.bind(this);
  }

  getMeteorData(){
    // if (Meteor.userId() !== null)
    console.log("astroid status", asteroid.loggedIn);

    return { isAuthenticated: asteroid.loggedIn};
  }


  render(){
    let isAuthenticated = this.state.isAuthenticated;
    // console.log('ASTEROID in ContactsApp', asteroid);


    return(
      <div>
        <Header />
        {
            isAuthenticated ?
              <div className='container col-xs-offset-0 col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-3 col-md-6'>

                <AddContactForm />
                <Footer />
                <ContactsList />

              </div>
          : <div className='centered-container centered-text'>
            <h1 >Welcome to <strong className='brand-text-color'>Contacts</strong> Manager</h1>

            <h4>
              Web application to manage your contacts
            </h4>
              <Link to="/login">
                <button className='btn btn-lg btn-primary'>Sign In</button>
            </Link>
          </div>

        }

      </div>

    )
  }

}

export default connect()(ContactsApp);
