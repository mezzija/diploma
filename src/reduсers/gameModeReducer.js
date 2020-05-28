import {handleActions} from 'redux-actions';
import {startState} from '../constants/defaultState';
//action
import {startGame} from '../action'




export default {
    start:handleActions({
        [startGame]:(store)=> ({...store,play :!store.play}),
    },startState)
}