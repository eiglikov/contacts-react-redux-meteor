// import random from 'meteor-random';
import { getIsFetching, getContact, contacts } from '../reducers';
import { getPersistor } from '../configure-store';

export const fetchContacts = (filter) => (dispatch, getState, asteroid) => {
  console.log("Fetching...");
  console.log("fetchContacts state", getState());

  if (getIsFetching(getState(), filter)) {
    return Promise.resolve()
  }
  dispatch({
    type: 'FETCH_CONTACTS_REQUEST',
    filter
  })

  return new Promise((resolve, reject) => {
    // console.log("2");

    asteroid.subscribe('contacts', filter)
    .on('ready', () => {
      dispatch({
        type: 'FETCH_CONTACTS_SUCCESS',
        filter
      })
    })
    .on('error', error => {
      reject(error)
      dispatch({
        type: 'FETCH_CONTACTS_FAILURE',
        filter,
        message: error.message || 'Something went wrong',
      })
    })
  })

}

export const addTodo = (name, phone, email, imageUrl, group) => (dispatch, getState, asteroid) => {
  // for optimistic UI we immediately dispatch an DDP_ADDED action
  // let id = random.id()
  // console.log("ddp_added in addTodo");

  asteroid.call('contacts.insert', name, phone, email, imageUrl, group)
  .catch((err) => {
    // something went wrong when creating the new Contact
    // since we optimistically added the Contact already we need to remove it now
    console.log('error:', err);

    dispatch({
      type: 'DDP_REMOVED',
      response: { collection: 'contacts', id },
    })
  })
  .then(() => {
    // if this succeeds the Contact has already been added
    // so there is nothing more Contact
    console.log("Contact Added", name, phone, email, imageUrl, group);
  })

}


export const editContact = (id, name, phone, email, imageUrl) =>
(dispatch, getState, asteroid) => {
  asteroid.call('contacts.update', id, name, phone, email, imageUrl)
  .catch(() => {
    dispatch({
      type: 'DDP_CHANGED',
      response: { collection: 'contacts', id, doc: { name, phone, email, imageUrl } },
    })
  })
  .then(() => {
    console.log("contact updated", id, name, phone, email, imageUrl);
  })
}

export const removeContact = (id) => (dispatch, getState, asteroid) => {
  asteroid.call('contacts.remove', id)
  .catch((err) => {
    console.log("remove error", err);
  })
}

export const toggleTodo = (id) => (dispatch, getState, asteroid) => {
  const doc = getContact(getState(), id)
  dispatch({
    type: 'DDP_CHANGED',
    response: { collection: 'contacts', doc: { ...doc, completed: !doc.completed } },
  })
  asteroid.call('toggleTodo', id)
  .catch(() => {
    // something went wrong when creating the new Contact
    // since we optimistically added the Contact already we need to remove it now
    dispatch({
      type: 'DDP_CHANGED',
      response: { collection: 'contacts', doc },
    })
  })
}


export const signIn = (email, password, history, handleError) => (dispatch, getState, asteroid) => {
  asteroid.loginWithPassword({email: email, password: password})
  .catch((err) => {
    console.log("login error", err);
    handleError(err.reason)
  })
  .then(() => {
    dispatch({
      type: 'LOG_IN',
      loggedIn: true
    })
    history.push('/group/all');
  })
}


export const logout = () => (dispatch, getState, asteroid) => {
  dispatch({
    type: 'LOG_OUT',
    loggedIn: false
  })

  asteroid.logout()
  .catch((err) => {
    console.log("logout error", err);

  })
  .then(() => {
    console.log("LoggedOut");
    Meteor.logout()

    // console.log("Persistor", getPersistor());

    getPersistor().pause();
    console.log("Persistor purged");
  })

}
