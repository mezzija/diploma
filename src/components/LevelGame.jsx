import React from 'react';
import {useSelector} from "react-redux";
import ClassNames from 'classnames'
//styles
import useStyles from "../styles/components/LevelGame";
const LevelGame=()=>{
    const classes=useStyles();
    const active=useSelector(store=>store.start.play);

    return(
        <div className={ClassNames(classes.levelGameCard,{[classes.active]:active})}>
            <p>Game difficulty</p>
            <a href="#"> Easy(5x2) </a>
            <a href="#">Medium(6x3)</a>
            <a href="#">Hard(8x3)</a>
        </div>
    )
}
export default LevelGame;