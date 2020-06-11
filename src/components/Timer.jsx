import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import moment from 'moment';
//style
import useStyles from '../styles/components/Timer'
import {timer} from "redux-logger/src/helpers";
import SkinsCard from "./SkinsCard";

const Timer = () => {
    const classes = useStyles();
    const [time,setTime]=useState(0);
    const play = useSelector(store => store.start.play)

    useEffect(() => {
        if (play) {
            setTimeout(()=>setTime(prevState => prevState + 1000),1000)
        } else {
            setTime(0)
        }
    }, [play,time]);
    return (
        <div className={classes.timerStyle}>
            <p>{moment(time).format('mm:ss')}</p>
        </div>
    )
}

Timer.displayName = 'Timer';

export default Timer;