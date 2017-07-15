import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions';


const Header = ({ history, dispatch, loggedIn }) => {

  const handleSignIn = () => {
    console.log("handleSignIn");
    history.push('/login');
  }
  const handleSignUp = () => {
    console.log("handleSignUp");
    history.push('/signup');
  }
  const handleLogout = () => {
    console.log("handleLogout", loggedIn);
    dispatch(logout(history));
  }
  const linkToHome = () => {
    history.push('/');
  }

    // const isAuthenticated = loggedIn;
    // console.log("store here", props);
    // const {isAuthenticated} = props;
    // console.log(isAuthenticated);

    console.log("loggedIn", loggedIn);


    const guestLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li><a onClick={handleSignUp}>
          <span className="glyphicon glyphicon-user"></span> Sign up
        </a></li>
        <li><a onClick={handleSignIn}>
          <span className="glyphicon glyphicon-log-in"></span> Log in
        </a></li>
      </ul>
    )
    const userLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li><a onClick={handleLogout}>
          <span className="glyphicon glyphicon-log-out"></span> Log out
        </a></li>
      </ul>
  )

    return(
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <a href='#' className="navbar-brand" onClick={linkToHome}>
              <strong className='brand-text-color'>Contacts</strong> Manager
            </a>
          </div>
          {
            loggedIn ? userLinks : guestLinks
          }
        </div>
      </nav>
  )
}

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired
}
const mapStateToProps = state => {
  console.log("state", state);

  return {
    loggedIn : state.authReducers.loggedIn
  }
}

export default connect(mapStateToProps)(Header);
