/*
 * action types
 */

export const ADD_CONTACT = 'ADD_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';
export const EDIT_CONTACT = 'EDIT_CONTACT';


/*
* action helpers
*/
 function insertContact(name, phone) {
     console.log('HEY insertContact !!');
     Meteor.call('contacts.insert', name, phone);
 };
 function deleteContact(id) {
     console.log('HEY removeContact !!');
     Meteor.call('contacts.remove', id);
 };


 /*
  * action creators
  */
export function addContact(name, phone) {
  insertContact(name, phone);
  return { type: ADD_CONTACT, name, phone }
}

export function removeContact(id) {
  deleteContact(id);
  return { type: REMOVE_CONTACT, id }
}
