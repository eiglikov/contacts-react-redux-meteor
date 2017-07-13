import { combineReducers } from 'redux'
import byId, * as fromById from './byId'
import createList, * as fromList from './createList'
import authReducers from './auth'

const listByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed'),
})



const contacts = combineReducers({
  authReducers,
  byId,
  listByFilter
})

const rootReducer = ( state, action ) => {
  if ( action.type === 'LOG_OUT' ) {
    state = undefined;
  }

  return contacts(state, action)
}


export default rootReducer


export const getVisibleTodos = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter[filter])
  return ids.map(id => fromById.getTodo(state.byId, id))
}

export const getTodo = (state, id) =>
  fromById.getTodo(state.byId, id)

export const getIsFetching = (state, filter) =>
  fromList.getIsFetching(state.listByFilter[filter])

export const getErrorMessage = (state, filter) =>
  fromList.getErrorMessage(state.listByFilter[filter])
