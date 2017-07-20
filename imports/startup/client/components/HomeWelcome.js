import React from 'react'
import { Link } from 'react-router-dom'

const HomeWelcome = () => (
  <div className='centered-container centered-text'>
    <h1>Welcome to <strong className='brand-text-color'>Contacts</strong> Manager</h1>
    <h4>Web application to manage your contacts</h4>
    <Link to='/login'>
      <button className='btn btn-lg btn-primary'>Sign In</button>
    </Link>
  </div>
)

export default HomeWelcome
