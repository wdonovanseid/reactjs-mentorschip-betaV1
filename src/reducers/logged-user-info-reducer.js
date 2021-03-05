import * as c from '../actions/ActionTypes';

export default (state = null, action) => {
  const { loggedUser } = action;
  switch (action.type) {
  case c.LOGGED_USER:
    const newState = loggedUser;
    return newState;
  case c.NO_USER_LOGGED:
    const newState2 = null;
    return newState2;
  default:
    return state;
  }
};