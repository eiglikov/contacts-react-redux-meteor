import React from 'react'
import ContactsList from './ContactsList'
import Footer from './Footer'
import AddContactForm from './AddContactForm'
import DevTools from './DevTools';
import AccountsUIWrapper from './AccountsUIWrapper';

const ContactsApp = () => (
  <div className='container'>
    <h1>ContactsApp</h1>
    <DevTools />
    <AccountsUIWrapper />

    <AddContactForm />
    <Footer />
    <ContactsList />
  </div>
)

export default ContactsApp;
