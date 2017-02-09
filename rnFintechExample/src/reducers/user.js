import { SET_USER } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, action.user);
    default:
      return state;
  }
};
