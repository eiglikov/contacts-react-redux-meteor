/*
 * action types
 */

export const ADD_CONTACT = 'ADD_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';
export const EDIT_CONTACT = 'EDIT_CONTACT';


/*
 * action creators
 */
 function insertContact(name, phone) {
   return () => {
     console.log('HEY insertContact !!');

     Meteor.call('contacts.insert', name, phone);
   };
 };

export function addContact(name, phone) {
  // insertContact(name, phone);
  Meteor.call('contacts.insert', name, phone);
  return { type: ADD_CONTACT, name, phone }
}

export function removeContact(_id) {
  // insertContact(name, phone);
  Meteor.call('contacts.remove', _id);
  return { type: REMOVE_CONTACT, _id }
}
