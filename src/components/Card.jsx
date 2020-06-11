import React,{useState,useEffect,memo} from 'react';
import ClassNames from 'classnames';
//style
import useStyle from '../styles/components/Card';
import {tms} from '../constants/logo'

//image


const Card=({skin,...props})=>{
    const classes=useStyle()
    const handleClick=()=>{
        props.changeStatus(skin.key)
    };
    return(
        <div className={classes.flipCard}>
            <div onClick={handleClick} className={ClassNames(classes.flipCardInner,{[classes.active]:skin.status,[classes.disable]:skin.disable})}>
                <div className={classes.flipCardFront}>
                    <img src={tms} alt="front"/>
                </div>
                <div className={classes.flipCardBack}>
                    <img src={skin.src} alt="back"/>
                </div>
            </div>

        </div>
    )
};
Card.displayName = 'Card';

export default memo(Card);