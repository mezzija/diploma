import React from 'react';
import {useSelector} from "react-redux";
//style
import useStyles from '../styles/components/StartWindow'
const StartWindow=()=>{
    const classes=useStyles();
    const user=useSelector(store=>store.user)
    return(
        <div className={classes.startWindow}>
            <p>Hello, {user.login}!</p>
        </div>

    )
}
export default StartWindow