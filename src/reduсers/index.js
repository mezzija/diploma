import { combineReducers } from 'redux';
// reducers
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import gameModeReducer from './gameModeReducer';
import userReducer from './userReducer';
import timeReducer from './timeReducer';

const reducers = persistReducer({
  key: 'root',
  storage,
  whitelist: [
    'user',
  ],

},
combineReducers({
  ...gameModeReducer,
  ...userReducer,
  ...timeReducer,
}));

export default reducers;
