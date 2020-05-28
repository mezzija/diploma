import React from 'react';
//styles
import useStyles from "../styles/components/LevelGame";
const LevelGame=()=>{
    const classes=useStyles()
    return(
        <div className={classes.levelGameCard}>
            <p>Game difficulty</p>
            <a href="#"> Easy(5x2) </a>
            <a href="#">Medium(6x3)</a>
            <a href="#">Hard(8x3)</a>
        </div>
    )
}
export default LevelGame;