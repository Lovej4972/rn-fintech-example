import {
  SET_USER,
  ADD_ACCOUNT,
  UPDATE_ACCOUNT,
  REMOVE_ACCOUNT,
  SET_SELECTED_ACCOUNT,
} from './types';

export const setUserAction = user => ({
  type: SET_USER,
  user,
});
export const updateAccountAction = (selectedAccount, email, account) => ({
  type: UPDATE_ACCOUNT,
  selectedAccount,
  email,
  account,
});
export const addAccountAction = (account, email) => ({
  type: ADD_ACCOUNT,
  account,
  email,
});
export const removeAccountAction = (selectedAccount, email) => ({
  type: REMOVE_ACCOUNT,
  selectedAccount,
  email,
});
export const setSelectedAccountAction = selectedAccount => ({
  type: SET_SELECTED_ACCOUNT,
  selectedAccount,
});
export const addHoldingAction = (selectedAccount, email, holding) => ({
  type: SET_SELECTED_ACCOUNT,
  selectedAccount,
  email,
  holding,
});
