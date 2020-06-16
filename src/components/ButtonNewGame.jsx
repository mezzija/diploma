import React,{useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
//styles
import useStyles from "../styles/components/ButtonNewGame";
//action

import {startGame} from "../action";

const ButtonNewGame = () => {
    const classes = useStyles()
    const dispatch = useDispatch();
    const active = useSelector(store => store.start.play);
    const  history=useHistory();
    useEffect(()=>{
        if(active){
            history.push('/game');
        }else{
            history.push('/');
        }

    },[active])
    const handleClick = (event) => {
        event.preventDefault();
        dispatch(startGame());
    }
    const game = active ? 'End Game' : 'New Game';
    return (
        <div onClick={handleClick} className={classes.buttonNewGameStyle}>
            <p>{game}</p>
        </div>
    )
}

ButtonNewGame.displayName = 'ButtonNewGame';

export default ButtonNewGame;