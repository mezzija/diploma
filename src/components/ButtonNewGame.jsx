import React from 'react';
import {useDispatch} from "react-redux";
//styles
import useStyles from "../styles/components/ButtonNewGame";
//action

import {startGame} from "../action";

const ButtonNewGame=()=>{
    const classes=useStyles()
    const dispatch=useDispatch();
    const handleClick=(event)=>{
        event.preventDefault();
        dispatch(startGame());

    }
    return(
        <div onClick={handleClick} className={classes.buttonNewGameStyle}>
            <p>New Game</p>
        </div>
    )
}
export default ButtonNewGame;