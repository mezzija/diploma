import {handleActions} from 'redux-actions';
//store
import {timeGameState} from "../constants/defaultState";
//action
import {timeGame} from "../action";


export default {
    timeGame:handleActions({
        [timeGame]:(store,{payload=''})=>payload,

    },timeGameState)

}