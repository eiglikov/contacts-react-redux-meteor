import { combineReducers } from 'redux'
import unique from 'lodash/uniq'

const createList = (filter) => {

  const handleChange = (state, action) => {
    const { response: { doc } } = action
    const { id: contactId, group: group } = doc

    // remove if current filter isn't all or he group of contact
    let shouldRemove = false;
    if (typeof group != 'undefined'){
      shouldRemove = ((filter !== 'all') && (filter !== group))
    }

    return shouldRemove
    ? state.filter(id => id !== contactId)
    // otherwise add if not added yet
    : unique([...state, contactId])

  }

  const ids = (state = [], action) => {
    switch (action.type) {
      case 'DDP_ADDED':
      return (
        filter === 'all' ||
        (filter === 'family' && action.response.doc.group === 'family') ||
        (filter === 'friends' && action.response.doc.group === 'friends') ||
        (filter === 'colleagues' && action.response.doc.group === 'colleagues')
      ) ? unique([...state, action.response.doc.id]) : state
      case 'DDP_REMOVED':
      return state.filter(id => id !== action.response.id)
      case 'DDP_CHANGED':
      return handleChange(state, action)
      default:
      return state
    }
  }

  const isFetching = (state = false, action) => {
    if (action.filter !== filter) {
      return state
    }
    switch (action.type) {
      case 'FETCH_CONTACTS_REQUEST':
      return true
      case 'FETCH_CONTACTS_SUCCESS':
      case 'FETCH_CONTACTS_FAILURE':
      return false
      default:
      return state
    }
  }

  const errorMessage = (state = null, action) => {
    if (action.filter !== filter) {
      return state
    }
    switch (action.type) {
      case 'FETCH_CONTACTS_FAILURE':
      return action.message
      case 'FETCH_CONTACTS_REQUEST':
      case 'FETCH_CONTACTS_SUCCESS':
      return null
      default:
      return state
    }
  }

  return combineReducers({
    ids,
    isFetching,
    errorMessage,
  })
}

export default createList

export const getIds = (state) => state.ids
export const getIsFetching = (state) => state.isFetching
export const getErrorMessage = (state) => state.errorMessage
