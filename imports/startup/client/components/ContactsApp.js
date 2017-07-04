import React from 'react';
import DevTools from './DevTools';
import AddContact from './AddContact';
import ContactsList from './ContactsList';


export default function ContactsApp() {
  return (
    <div className='todo-container'>
      <DevTools />
      <h1>Hello from ContactsAPP!</h1>
      <AddContact />
      <ContactsList />
    </div>
  );
}
