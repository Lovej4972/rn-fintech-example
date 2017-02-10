
const ADD_ACCOUNT = 'addAccount';
const REMOVE_ACCOUNT = 'removeAccount';
const UPDATE_ACCOUNT = 'updateAccount';

const HOST = 'https://rnfintechex.herokuapp.com/';
const LOCALHOST = 'http://localhost:8080/';

const serverRequest = (url, params) =>
  fetch(`${LOCALHOST}${url}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  }).then(res => res)
    .catch(err => err);
/**
* addAccount - add account to a user
* @param {string} email   user email
* @param {object} account object
* @returns {Promise}
*/
export const addAccount = (email, account) =>
  serverRequest(ADD_ACCOUNT, { email, account })
  .then(res => res)
  .catch(err => err);
/**
* removeAccount - remove account from a user
* @param {string} email   user email
* @param {object} account object
* @returns {Promise}
*/
export const removeAccount = (email, account) =>
  serverRequest(REMOVE_ACCOUNT, { email, account })
  .then(res => res)
  .catch(err => err);
/**
* updateAccount - update account for a user
* @param {string} email   user email
* @param {object} account object
* @returns {Promise}
*/
export const updateAccount = (email, account) =>
  serverRequest(UPDATE_ACCOUNT, { email, account })
  .then(res => res)
  .catch(err => err);
