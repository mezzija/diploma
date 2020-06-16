import {combineReducers} from 'redux';
//reducers
import gameModeReducer from "./gameModeReducer";
import userReducer from "./userReducer";
import timeReducer from "./timeReducer";
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
        ...timeReducer,
    }),
);

export default reducers;