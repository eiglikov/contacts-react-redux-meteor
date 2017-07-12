// Reducer
export default LoginReducer = (state = {}, action) => {

  switch (action.type) {
    case 'LOG_IN':
      return Object.assign({}, state, {
        loggedIn: true,
      });
    case 'LOG_OUT':
    state = {};
    console.log('Action', action.type);
    console.log("state", state);

      return Object.assign({}, {}, {
        loggedIn: false,
      });
    default:
      return state;
  }
};
