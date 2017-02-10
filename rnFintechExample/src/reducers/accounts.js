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
      // make a copy of the current list of accounts
      let accounts = state[action.email].slice();
      // create a new object and merge both existing and new account
      const updateAccount = Object.assign({}, accounts[action.selectedAccount], action.account);
      // update the list of accounts at the right index
      accounts[action.selectedAccount] = updateAccount;
      return Object.assign({}, state, {
        [action.email]: accounts,
      });
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
