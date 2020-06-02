import {combineReducers} from 'redux';
//reducers
import gameModeReducer from "./gameModeReducer";
import logicGameReducers from "./logicGameReducers";

const reducers =combineReducers({
    ...gameModeReducer,
    ...logicGameReducers,

});
export default reducers;