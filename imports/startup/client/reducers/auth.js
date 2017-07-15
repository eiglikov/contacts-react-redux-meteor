// Reducer
export default LoginReducer = (state = {}, action) => {

  switch (action.type) {
    case 'LOG_IN':
      return Object.assign({}, state, {
        loggedIn: true,
      });
      case 'LOG_OUT':
        return Object.assign({}, state, {
          loggedIn: false,
        });
    case 'REHYDRATE':
      var incoming = action.payload.myReducer;
      if (incoming) return {...state, ...incoming, specialKey: processSpecial(incoming.specialKey)}
      return state;
    // case 'LOG_OUT':
    // console.log('Action', action.type);
    //   return null;
    default:
      return state;
  }
};
