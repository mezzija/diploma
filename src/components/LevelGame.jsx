import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import ClassNames from 'classnames'
//styles
import useStyles from "../styles/components/LevelGame";
//action
import {changeDifficulty} from "../action";

const LevelGame=()=>{
    const classes=useStyles();
    const active=useSelector(store=>store.start.play);
    const dispatch=useDispatch();

    const handleClick=(event)=>{
        event.preventDefault();
        dispatch(changeDifficulty(event.target.id))
    };

    return(
        <div className={ClassNames(classes.levelGameCard,{[classes.active]:active})}>
            <p>Game difficulty</p>
            <a onClick={handleClick} id="easy" href="#"> Easy (5x2) </a>
            <a onClick={handleClick} id="medium" href="#">Medium (6x3)</a>
            <a onClick={handleClick} id="hard" href="#">Hard (8x3)</a>
        </div>
    )
}
export default LevelGame;