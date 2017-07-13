import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import { logout } from '../actions';
import asteroid from '../configure-asteroid'


class Header extends Component {
  constructor(props) {
    super(props);

    this.state = this.getMeteorData();
  }
  getMeteorData(){
    // if (Meteor.userId() !== null)
    console.log("astroid status", asteroid.loggedIn);

    return { isAuthenticated: asteroid.loggedIn};
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
    console.log("handleLogout");
    this.props.dispatch(logout(this.props.history));
  }
  render() {
    let isAuthenticated = this.state.isAuthenticated;

    return(
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              <strong className='brand-text-color'>Contacts</strong> Manager
            </Link>
          </div>

          {
              isAuthenticated ?
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/" onClick={this.handleLogout}>
                    <span className="glyphicon glyphicon-log-out"></span> Log out
                  </Link></li>
                </ul>
              :
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/signup" onClick={this.handleSignUp}>
                <span className="glyphicon glyphicon-user"></span> Sign up
              </Link></li>
              <li><Link to="/login" onClick={this.handleSignIn}>
                <span className="glyphicon glyphicon-log-in"></span> Log in
              </Link></li>
            </ul>
          }
        </div>
      </nav>
)
}
}

export default Header;
