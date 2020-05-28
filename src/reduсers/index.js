import {combineReducers} from 'redux';
//reducers
import gameModeReducer from "./gameModeReducer";

const reducers =combineReducers({
    ...gameModeReducer,
});
export default reducers;