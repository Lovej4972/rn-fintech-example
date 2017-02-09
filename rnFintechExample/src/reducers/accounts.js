import {
  ADD_ACCOUNT,
  UPDATE_ACCOUNT,
  REMOVE_ACCOUNT,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_ACCOUNT:
      return Object.assign({}, state, {
        [action.email]: (state[action.email]) ?
          [...state[action.email], action.account] : [action.account],
      });       
    case UPDATE_ACCOUNT:
      return state;
    case REMOVE_ACCOUNT:
      return state;
    default:
      return state;
  }
};
