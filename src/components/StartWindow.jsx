import React from 'react';
import {useSelector} from "react-redux";
//style
import useStyles from '../styles/components/StartWindow';

import {logo} from '../constants/logo';

const StartWindow=()=>{
    const classes=useStyles();
    const user=useSelector(store=>store.user)
    return(
        <div className={classes.startWindow}>
            <div className={classes.startLogo}>
                <img src={logo} alt="logo"/>
            </div>
            <p>Hello, {user.login}!</p>
            <div className={classes.description}>
                <p>Memory is counter game where the object it to find pairs.</p>
                <p>When the game begins, all pictures are hidden</p>
            </div>
            <p>To Play:</p>
            <div className={classes.description}>
                <p>1. Select two cards  to try to match the pictures</p>
                <p>2. If you match the pictures you can go again</p>
                <p>3. If they don't match it is the computer turn them</p>
                <p>4. The player that finds all pairs wins!</p>
                <p>5. Have Fun!</p>
            </div>
        </div>


    )
}
export default StartWindow