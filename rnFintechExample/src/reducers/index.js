import { combineReducers } from 'redux';
import user from './user';
import accounts from './accounts';
import selected from './selected';

export default combineReducers({
  user,
  accounts,
  selected,
});
