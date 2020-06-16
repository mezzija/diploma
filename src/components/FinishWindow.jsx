import React from 'react';
import {useSelector} from "react-redux";
//style
import '../styles/components/FinishWindow.css';
import useStyles from '../styles/components/FinishWindow';

const FinishWindow=()=>{
    const timeGame=useSelector(store=>store.timeGame);
    const classes =useStyles()

    return(
        <>
            <div className="pyro">
                <div className="before"/>
                <div className="after"/>
            </div>
            <div className={classes.result}>
                <p className={classes.text}>Congratulations you'r time:</p>
                <p>{timeGame}</p>
            </div>
        </>
    )
}
export default FinishWindow;