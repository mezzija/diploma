import { handleActions } from 'redux-actions';
// store
import { userState } from '../constants/defaultState';
// action
import { addUser } from '../action';

export default {
  user: handleActions({
    [addUser]: (store, { payload = '' }) => ({ ...store, login: payload }),
  }, userState),

};
