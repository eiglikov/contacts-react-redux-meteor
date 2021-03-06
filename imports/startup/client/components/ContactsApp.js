import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Header from './Pages/Header'
import AddContactForm from './Contact/AddContactForm'
import Filters from './Groups/Filters'
import ContactsList from './Contact/ContactsList'

const ContactsApp = ({ loggedIn, history }) => (
  <div>
    {
      loggedIn ?
        <div className='container'>
          <div className='col-xs-offset-0 col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-3 col-md-6'>
            <AddContactForm />
            <Filters />
            <ContactsList />
          </div>
        </div>
      : <div className='centered-container centered-text'>
        <h1>Unauthorized</h1>
        <Link to='/login'>
          <button className='btn btn-lg btn-primary'>Sign In</button>
        </Link>
      </div>
    }
  </div>
)

ContactsApp.propTypes = {
  loggedIn: PropTypes.bool
}
const mapStateToProps = state => {
  return {
    loggedIn : state.authReducers.loggedIn
  }
}

export default connect(mapStateToProps)(ContactsApp)
