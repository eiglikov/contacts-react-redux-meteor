import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions'

const Header = ({ dispatch, loggedIn }) => {
  const handleLogout = () => {
    dispatch(logout())
  }
  return(
    <nav className="navbar navbar-default navbar-static-top">
      <div className="container">
        <div className="navbar-header">
          <Link to={loggedIn ? '/group/all' : '/'} className="navbar-brand">
            <span className='brand-text-color'>Contacts</span> Manager
          </Link>
        </div>
        {
          loggedIn ?
            <ul className="nav navbar-nav navbar-right">
              <li><Link to='/' onClick={handleLogout}>
                <span className="glyphicon glyphicon-log-out"></span> Log out
              </Link></li>
            </ul>
          :
          <ul className="nav navbar-nav navbar-right">
            <li><Link to='/signup'>
              <span className="glyphicon glyphicon-user"></span> Sign up
            </Link></li>
            <li><Link to='/login'>
              <span className="glyphicon glyphicon-log-in"></span> Log in
            </Link></li>
          </ul>
        }
      </div>
    </nav>
)
}

Header.propTypes = {
  loggedIn: PropTypes.bool
}
const mapStateToProps = (state) => {
  return { loggedIn : state.authReducers.loggedIn }
}
export default connect(mapStateToProps)(Header)
