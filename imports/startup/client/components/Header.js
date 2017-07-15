import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions';


const Header = ({ history, dispatch, loggedIn }) => {
  const handleLogout = () => {
    console.log("handleLogout", loggedIn);
    dispatch(logout());
  }
  const guestLinks = (
    <ul className="nav navbar-nav navbar-right">
      <li><Link to='/signup'>
        <span className="glyphicon glyphicon-user"></span> Sign up
      </Link></li>
      <li><Link to='/login'>
        <span className="glyphicon glyphicon-log-in"></span> Log in
      </Link></li>
    </ul>
)
const userLinks = (
  <ul className="nav navbar-nav navbar-right">
    <li><Link to='/' onClick={handleLogout}>
      <span className="glyphicon glyphicon-log-out"></span> Log out
    </Link></li>
  </ul>
)

return(
  <nav className="navbar navbar-default navbar-static-top">
    <div className="container">
      <div className="navbar-header">
        <Link to={loggedIn ? '/group/all' : '/'} className="navbar-brand">
          <strong className='brand-text-color'>Contacts</strong> Manager
        </Link>
      </div>
      {
        loggedIn ? userLinks : guestLinks
      }
    </div>
  </nav>
)
}

Header.propTypes = {
  loggedIn: PropTypes.bool
}
const mapStateToProps = state => {
  console.log("state", state);

  return {
    loggedIn : state.authReducers.loggedIn
  }
}

export default connect(mapStateToProps)(Header);
