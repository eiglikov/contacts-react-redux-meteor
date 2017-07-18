import { getIsFetching, getContact, contacts } from '../reducers'
import { getPersistor } from '../configure-store'
import { Accounts } from 'meteor/accounts-base'
import { Random } from 'meteor/random'

export const fetchContacts = (filter) => (dispatch, getState, asteroid) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve()
  }
  dispatch({
    type: 'FETCH_CONTACTS_REQUEST',
    filter
  })

  return new Promise((resolve, reject) => {
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

export const addTodo = (name, phone, email, imageUrl, group = 'all') =>
(dispatch, getState, asteroid) => {
  // for optimistic UI we immediately dispatch an DDP_ADDED action
  let contactId = Random.id()

  asteroid.call('contacts.insert', contactId, name, phone, email, imageUrl, group)
  .then(() => {
    // if this succeeds the Contact has already been added
    // so there is nothing more Contact
    console.log("Contact Added")
  })
  .catch((err) => {
    // something went wrong when creating the new Contact
    // since we optimistically added the Contact already we need to remove it now
    console.log('ERROR:', err)
    dispatch({
      type: 'DDP_REMOVED',
      response: { collection: 'contacts', contactId },
    })
  })


}


export const editContact = (id, name, phone, email, imageUrl, group) =>
(dispatch, getState, asteroid) => {
  asteroid.call('contacts.update', id, name, phone, email, imageUrl, group)
  .then(() => {
    console.log("contact updated")
  })
  .catch((err) => {
    console.log("ERROR edit", err);
  })
}

export const removeContact = (id) => (dispatch, getState, asteroid) => {
  asteroid.call('contacts.remove', id)
  .then(() => {
    console.log("contact removed");
  })
  .catch((err) => {
    console.log("remove ERROR", err)
  })
}


export const signIn = (email, password, history, handleError) =>
(dispatch, getState, asteroid) => {
  console.log("login aciton", email, password, history, handleError);

  asteroid.loginWithPassword({email: email, password: password})
  .then(() => {
    dispatch({
      type: 'LOG_IN',
      loggedIn: true
    })
    history.push('/group/all')
  })
  .catch((err) => {
    console.log("login ERROR", err)
    handleError(err.reason)
  })
}

export const signUp = (name, email, password, history, handleError) =>
(dispatch, getState, asteroid) => {
  Accounts.createUser({ username: name, email: email, password: password},
    (err) => {
      if(err){
        console.log("signup ERROR", err)
        handleError(err.reason)
      } else {
        dispatch({
          type: 'SIGN_UP'
        })
        history.push('/login')
      }
    })
}

export const logout = () => (dispatch, getState, asteroid) => {
  dispatch({
    type: 'LOG_OUT',
    loggedIn: false
  })

  asteroid.logout()
  .then(() => {
    getPersistor().pause()
    console.log("Logged Out")
  })
  .catch((err) => {
    console.log("logout ERROR", err)
  })

}
