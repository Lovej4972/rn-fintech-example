import {
  SET_USER,
  ADD_ACCOUNT,
  UPDATE_ACCOUNT,
  REMOVE_ACCOUNT,
} from './types';

export const setUserAction = user => ({
  type: SET_USER,
  user,
});
export const updateAccountAction = (account, email) => ({
  type: UPDATE_ACCOUNT,
  account,
  email,
});
export const addAccountAction = (account, email) => ({
  type: ADD_ACCOUNT,
  account,
  email,
});
export const removeAccountAction = (account, email) => ({
  type: REMOVE_ACCOUNT,
  account,
  email,
});
