import omit from 'lodash/omit'

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'DDP_CHANGED':
    return {
      ...state,
      [action.response.doc.id]: {
        // merge the old doc with the changed fields
        ...state[action.response.doc.id],
        ...action.response.doc,
      },
    }
    case 'DDP_ADDED':
    return {
      ...state,
      [action.response.doc.id]: action.response.doc,
    }
    case 'DDP_REMOVED':
    return omit(state, action.response.id)
    default:
    return state
  }
}

export default byId

export const getContact = (state, id) => state[id]
