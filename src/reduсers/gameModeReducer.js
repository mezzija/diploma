import { handleActions } from 'redux-actions';
import { startState } from '../constants/defaultState';
// action
import { startGame, changeSkins, changeDifficulty } from '../action';

export default {
  start: handleActions({
    [startGame]: (store) => ({ ...store, play: !store.play }),
    [changeSkins]: (store, { payload = '' }) => ({ ...store, skinCard: payload }),
    [changeDifficulty]: (store, { payload = '' }) => ({ ...store, difficulty: payload }),
  }, startState),

};
