import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';

function addContact(state = [], action) {
  switch(action.type) {
    case 'ADD_CONTACT':
    console.log("HEY", action.type);

      return [...state, {
        name : action.name,
        phone : action.phone
      }];
    default:
      return state;
  }
}

function removeContact(state = [], action) {
  switch(action.type) {
    case 'REMOVE_CONTACT':
    console.log("HEY", action.type);
    Meteor.call('contacts.remove', action.id);

      return [...state, {
        id : action.id
      }];
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  visibilityFilter,
  addContact,
  removeContact
});

export default rootReducer;
