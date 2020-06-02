import {handleActions} from 'redux-actions';
//store
import {activeCardState} from '../constants/defaultState';
//action
import {findEqualCard} from "../action";

export default {
    activeCard:handleActions({
        [findEqualCard]:(store,{payload=''})=>{


        }

    },activeCardState)
}