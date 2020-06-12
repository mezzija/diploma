import {combineReducers} from 'redux';
//reducers
import gameModeReducer from "./gameModeReducer";
import userReducer from "./userReducer";
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const reducers =persistReducer({
        key:'root',
        storage,
        whitelist:[
            'user',
        ]

    },
    combineReducers({
        ...gameModeReducer,
        ...userReducer,
    }),
);

export default reducers;