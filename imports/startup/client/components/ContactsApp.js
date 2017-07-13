import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';

import ContactsList from './ContactsList'
import Footer from './Footer'
import AddContactForm from './AddContactForm'
import AccountsUIWrapper from './AccountsUIWrapper';
import DevTools from './DevTools';
import asteroid from '../configure-asteroid'

import { logout } from '../actions';

class ContactsApp extends Component {
  constructor(props){
    super(props);
    this.state = this.getMeteorData();
    // this.state = {
    //   isAuthenticated: true
    // }
    console.log(props);
    // console.log("meteordata", this.state);

    this.handleLogout = this.handleLogout.bind(this);
  }

  getMeteorData(){
    // if (Meteor.userId() !== null)
    console.log("astroid status", asteroid.loggedIn);

      return { isAuthenticated: asteroid.loggedIn};
  }

  handleLogout(){
    // e.preventDefault();
    // console.log("handleLogout", this.props.history);

    this.props.dispatch(logout(this.props.history));
    //
    // Meteor.logout( (err) => {
    //   if (err) {
    //     console.log( err.reason );
    //   } else {
    //     this.props.history.push('/login');
    //   }
    // });
    // this.props.history.push('/login');
  }


  render(){
    let isAuthenticated = this.state.isAuthenticated;
    // console.log('ASTEROID in ContactsApp', asteroid);


    return(
      <div>
        <nav className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">ContactsApp</a>
            </div>
            <div className="navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#" onClick={this.handleLogout}>{asteroid.userId} Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className='container'>
          <DevTools />
          <AccountsUIWrapper />

          {
            isAuthenticated ?
              <div>
                <AddContactForm />
                <Footer />
                <ContactsList />

              </div>
            : <h3>Welcome to Contacts App, please <Link to="/login">Sign In</Link></h3>

          }

        </div>
      </div>

    )
  }

}

export default connect()(ContactsApp);
