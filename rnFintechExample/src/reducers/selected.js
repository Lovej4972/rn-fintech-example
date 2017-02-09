import { SET_SELECTED_ACCOUNT } from '../actions/types';
const initialState = {
  selectedAccount: null,
}
export default (state = {}, action) => {
  switch (action.type) {
    case SET_SELECTED_ACCOUNT:
      return Object.assign({}, state, {
        selectedAccount: action.selectedAccount,
      });
    default:
      return state;
  }
};
