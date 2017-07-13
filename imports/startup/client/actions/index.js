import random from 'meteor-random';
import { getIsFetching, getTodo, contacts } from '../reducers';

export const fetchContacts = (filter) => (dispatch, getState, asteroid) => {
  console.log("Fetching...");

  if (getIsFetching(getState(), filter)) {
    return Promise.resolve()
  }
  dispatch({
    type: 'FETCH_TODOS_REQUEST',
    filter
  })

  return new Promise((resolve, reject) => {
    // console.log("2");

    asteroid.subscribe('contacts')
    .on('ready', () => {
      console.log('Meteor.userId', Meteor.userId());
      console.log(asteroid);

      dispatch({
        type: 'FETCH_TODOS_SUCCESS',
        filter
      })
    })
    .on('error', error => {
      reject(error)
      dispatch({
        type: 'FETCH_TODOS_FAILURE',
        filter,
        message: error.message || 'Something went wrong',
      })
    })
  })

}

export const addTodo = (name, phone, email, imageUrl) => (dispatch, getState, asteroid) => {
  // for optimistic UI we immediately dispatch an DDP_ADDED action
  let id = random.id()
  // console.log("ddp_added in addTodo");

  // dispatch({
  //   type: 'DDP_ADDED',
  //   response: { collection: 'contacts', doc: { id, name, phone, completed: false } },
  // })
  // console.log(imageUrl);

  asteroid.call('contacts.insert', name, phone, email, imageUrl).then(() => {
    // if this succeeds the Contact has already been added
    // so there is nothing more Contact
  })
  .catch((err) => {
    // something went wrong when creating the new Contact
    // since we optimistically added the Contact already we need to remove it now
    console.log('error:', err);

    dispatch({
      type: 'DDP_REMOVED',
      response: { collection: 'contacts', id },
    })
  })
}


export const editContact = (id, name, phone, email, imageUrl) =>
(dispatch, getState, asteroid) => {
  console.log("DDP_CHANGED in editContact", id, name, email, imageUrl);

  // const doc = getTodo(getState(), id)
  // dispatch({
  //   type: 'DDP_CHANGED',
  //   response: { collection: 'contacts', id },
  // })
  asteroid.call('contacts.update', id, name, phone, email, imageUrl)
  .catch(() => {
    // something went wrong when creating the new Contact
    // since we optimistically added the Contact already we need to remove it now
    dispatch({
      type: 'DDP_CHANGED',
      response: { collection: 'contacts', id },
    })
  })
}

export const removeContact = (id) => (dispatch, getState, asteroid) => {
  // const doc = getTodo(getState(), id)
  // dispatch({
  //   type: 'DDP_REMOVED',
  //   response: { collection: 'contacts', id },
  // })
  asteroid.call('contacts.remove', id)
  .catch(() => {
    // something went wrong when creating the new Contact
    // since we optimistically added the Contact already we need to remove it now
    dispatch({
      type: 'DDP_CHANGED',
      response: { collection: 'contacts', id },
    })
  })
}

export const toggleTodo = (id) => (dispatch, getState, asteroid) => {
  const doc = getTodo(getState(), id)
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


export const signIn = (email, password, history) => (dispatch, getState, asteroid) => {
  console.log("Sign in");
  // console.log("fetch userId", filter);
  asteroid.loginWithPassword({email: email,password: password})
  .then(() => {
    console.log("loggedIn");
    dispatch({
      type: 'LOG_IN'
    })
    history.push('/');
  })
  .catch((err) => {
    console.log("login error",err);
  })
  // Meteor.loginWithPassword(email, password, (err) => {
  //     if(err){
  //       console.log('error', err);
  //     } else {
  //       this.props.history.push('/');
  //     }
  //   });
}


export const logout = (history) => (dispatch, getState, asteroid) => {

  // console.log('SERVER Asteroid', asteroid);

  // asteroid.unsubscribe('contacts')
  // .then(() => {
    console.log("LoggedOut");
    asteroid.logout()
    .then(() => {
      dispatch({
        type: 'LOG_OUT'
      })
      console.log("logged out meteor");
      history.push('/login');
    })
    .catch((err) => {
      console.log("logout error", err);
    })
  // })
  // .catch((err) => {
  //   console.log("logout error", err);
  //
  // })



}
