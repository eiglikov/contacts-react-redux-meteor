import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Header from './Header'
import AddContactForm from './AddContactForm'
import Filters from './Filters'
import ContactsList from './ContactsList'


const ContactsApp = ({ loggedIn }) => (
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
      : <p>Loading...</p>
    }
  </div>
)

ContactsApp.propTypes = {
  loggedIn: PropTypes.bool
}
const mapStateToProps = state => {
  console.log("state", state)

  return {
    loggedIn : state.authReducers.loggedIn
  }
}

export default connect(mapStateToProps)(ContactsApp)
