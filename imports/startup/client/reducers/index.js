import { combineReducers } from 'redux'
import byId, * as fromById from './byId'
import createList, * as fromList from './createList'
import authReducers from './auth'

const listByFilter = combineReducers({
  all: createList('all'),
  family: createList('family'),
  friends: createList('friends'),
  colleagues: createList('colleagues'),
})



const contacts = combineReducers({
  authReducers,
  listByFilter,
  byId,
})

const rootReducer = ( state, action ) => {
  if ( action.type === 'LOG_OUT' ) {
    state = undefined
  }

  return contacts(state, action)
}


export default rootReducer


export const getVisibleContacts = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter[filter])
  return ids.map(id => fromById.getContact(state.byId, id))
}

export const getContact = (state, id) =>
  fromById.getContact(state.byId, id)

export const getIsFetching = (state, filter) =>
  fromList.getIsFetching(state.listByFilter[filter])

export const getErrorMessage = (state, filter) =>
  fromList.getErrorMessage(state.listByFilter[filter])
