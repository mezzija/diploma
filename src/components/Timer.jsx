import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import moment from 'moment';
import { useHistory } from "react-router-dom";
//style
import useStyles from '../styles/components/Timer'


const Timer = () => {
    const classes = useStyles();
    const [time,setTime]=useState(0);
    const play = useSelector(store => store.start.play);
    const  history=useHistory();

    useEffect(() => {
        if(history.location.pathname==='/' || history.location.pathname==='/game'){
            if (play) {
                setTimeout(()=>setTime(prevState => prevState + 1000),1000)
            } else {
                setTime(0)
            }
        }else if (history.location.pathname){

        }

    }, [play,time]);
    console.log(history.location.pathname);
    return (
        <div className={classes.timerStyle}>
            <p>{moment(time).format('mm:ss')}</p>
        </div>
    )
}

Timer.displayName = 'Timer';

export default Timer;