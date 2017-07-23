import React from 'react'

const ContactFetchError = ({ message, onRetry }) => (
  <div>
    <h3>Could not fetch Contacts, <span className='first-uppercase brand-text-color'>{message}</span></h3>
    <button onClick={onRetry}>Retry</button>
  </div>
)

export default ContactFetchError
