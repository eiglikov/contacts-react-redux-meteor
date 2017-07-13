// Reducer
export default LoginReducer = (state = {}, action) => {

  switch (action.type) {
    case 'LOG_IN':
      return Object.assign({}, state, {
        loggedIn: true,
      });
    // case 'LOG_OUT':
    // console.log('Action', action.type);
    //   return null;
    default:
      return state;
  }
};
