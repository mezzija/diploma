import React,{useRef,useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux";
import ClassNames from 'classnames'
//styles
import useStyles from "../styles/components/LevelGame";
//action
import {changeDifficulty} from "../action";

const LevelGame=()=>{
    const classes=useStyles();
    const {play,difficulty}=useSelector(store=>store.start);
    const dispatch=useDispatch();

    const easy=useRef(null);
    const medium=useRef(null);
    const hard=useRef(null);

    const handleClick=(event)=>{
        event.preventDefault();
        hard.current.classList.remove(classes.activeButton);
        easy.current.classList.remove(classes.activeButton);
        medium.current.classList.remove(classes.activeButton);

        event.target.classList.add(classes.activeButton);

        dispatch(changeDifficulty(event.target.id))
    };


    return(
        <div className={ClassNames(classes.levelGameCard,{[classes.active]:play})}>
            <p>Game difficulty</p>
            <a onClick={handleClick} ref={easy} className={classes.activeButton}   id="easy" href="#"> Easy (5x2) </a>
            <a onClick={handleClick} ref={medium}  id="medium" href="#">Medium (6x3)</a>
            <a onClick={handleClick}  ref={hard}  id="hard" href="#">Hard (8x3)</a>
        </div>
    )
}

LevelGame.displayName = 'LevelGame';

export default LevelGame;