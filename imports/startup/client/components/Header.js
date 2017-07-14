import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions';
import asteroid from '../configure-asteroid'


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isAuthenticated: asteroid.loggedIn};
  }

  handleSignIn = () => {
    console.log("handleSignIn");
    this.props.history.push('/login');
  }
  handleSignUp = () => {
    console.log("handleSignUp");
    this.props.history.push('/signup');
  }
  handleLogout = () => {
    console.log("handleLogout", this.props);
    this.props.dispatch(logout(this.props.history));
  }
  linkToHome = () => {
    this.props.history.push('/');
  }

  render() {
    let isAuthenticated = this.state.isAuthenticated;
    // console.log("store here", this.props);

    return(
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <a href='#' className="navbar-brand" onClick={this.linkToHome}>
              <strong className='brand-text-color'>Contacts</strong> Manager
            </a>
          </div>

          {
            isAuthenticated ?
              <ul className="nav navbar-nav navbar-right">
                <li><a onClick={this.handleLogout}>
                  <span className="glyphicon glyphicon-log-out"></span> Log out
                </a></li>
              </ul>
            :
            <ul className="nav navbar-nav navbar-right">
              <li><a onClick={this.handleSignUp}>
                <span className="glyphicon glyphicon-user"></span> Sign up
              </a></li>
              <li><a onClick={this.handleSignIn}>
                <span className="glyphicon glyphicon-log-in"></span> Log in
              </a></li>
            </ul>
          }
        </div>
      </nav>
  )
}
}
export default connect()(Header);
