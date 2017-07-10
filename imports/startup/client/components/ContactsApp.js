import React from 'react'
import ContactsList from './ContactsList'
// import Footer from './footer'
import AddContactForm from './AddContactForm'
import DevTools from './DevTools';
import AccountsUIWrapper from './AccountsUIWrapper';

const ContactsApp = () => (
  <div>
    <h1>ContactsApp</h1>
    <AccountsUIWrapper />
    <DevTools />
    <AddContactForm />
    <ContactsList />
  </div>
)

export default ContactsApp;
