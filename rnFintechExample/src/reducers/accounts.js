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
    return Object.assign({}, state, {
      [action.email]: [
        ...state[action.email].slice(0, action.selectedAccount),
        ...state[action.email].slice(action.selectedAccount + 1)
      ]
    });
    default:
      return state;
  }
};
