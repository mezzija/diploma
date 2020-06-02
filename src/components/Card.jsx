import React,{useState} from 'react';
import ClassNames from 'classnames';
//style
import useStyle from '../styles/components/Card';

//image


const Card=(props)=>{
    const [state,setState]=useState({active:false,disable:false});
    const classes=useStyle();
    const handleClick=()=>{
        setState(prevState => ({active:!prevState.active,disable: false}))
    };
    return(
        <div className={classes.flipCard}>
            <div onClick={handleClick} className={ClassNames(classes.flipCardInner,{[classes.active]:state.active,[classes.disable]:state.disable})}>
                <div className={classes.flipCardFront}>
                    <img src={props.front} alt="front"/>
                </div>
                <div className={classes.flipCardBack}>
                    <img src={props.skin} alt="back"/>
                </div>
            </div>

        </div>
    )
};

export default Card;