import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Header from './Header'
import AddContactForm from './AddContactForm'
import Filters from './Filters'
import ContactsList from './ContactsList'


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
        <h1><strong className='brand-text-color'>401</strong> Unauthorized</h1>
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
