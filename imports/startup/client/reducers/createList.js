import { combineReducers } from 'redux'
import unique from 'lodash/uniq'

const createList = (filter) => {

  // const handleToggle = (state, action) => {
  //   const { response: { doc } } = action
  //   const { completed, id: toggleId } = doc
  //   const shouldRemove = (
  //     (completed && filter === 'active') ||
  //     (!completed && filter === 'completed')
  //   )
  //   return shouldRemove
  //     ? state.filter(id => id !== toggleId)
  //     // otherwise add if not added yet
  //     : unique([...state, toggleId])
  // }

  const ids = (state = {}, action) => {
    // console.log('in ids', state, action);

    switch (action.type) {
    //   ||
    //  (filter === 'family' && action.response.doc.group === 'family') ||
    //  (filter === 'friends' && action.response.doc.group === 'friends')
      case 'DDP_ADDED':
        return (
          filter === 'all'
        ) ? unique([...state, action.response.doc.id]) : state
      case 'DDP_REMOVED':{
        console.log("DDP_REMOVED", state, action);

        return state.filter(id => id !== action.response.id)
      }
      case 'DDP_CHANGED':
        return handleToggle(state, action)
      default:
        return state
    }
  }

  const isFetching = (state = false, action) => {
    if (action.filter !== filter) {
      return state
    }
    switch (action.type) {
      case 'FETCH_TODOS_REQUEST':
        return true
      case 'FETCH_TODOS_SUCCESS':
      case 'FETCH_TODOS_FAILURE':
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
      case 'FETCH_TODOS_FAILURE':
        return action.message
      case 'FETCH_TODOS_REQUEST':
      case 'FETCH_TODOS_SUCCESS':
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
