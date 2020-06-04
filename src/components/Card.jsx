import React,{useState,useEffect} from 'react';
import ClassNames from 'classnames';
//style
import useStyle from '../styles/components/Card';
import {tms} from '../constants/logo'

//image


const Card=(props)=>{
    const [state,setState]=useState({active:false,disable:false,loader:false});
    const classes=useStyle();
    useEffect(()=>{
        if(state.loader){
            props.changeStatus(props.skin.key);
        }
    },[state])

    useEffect(()=>{

            if(props.skin.status==='closed'){
                setState({active:false,disable:false,loader:false})
            }else if (props.skin.status==='disable'){
                setState({active:true,disable:true,loader:false})
            }

    },[props.skin])

    const handleClick=()=>{
        if(props.skin.status==='closed'){
            setState({active:true,disable: false,loader:true})
        }

    };
    return(
        <div className={classes.flipCard}>
            <div onClick={handleClick} className={ClassNames(classes.flipCardInner,{[classes.active]:state.active,[classes.disable]:state.disable})}>
                <div className={classes.flipCardFront}>
                    <img src={tms} alt="front"/>
                </div>
                <div className={classes.flipCardBack}>
                    <img src={props.skin.src} alt="back"/>
                </div>
            </div>

        </div>
    )
};

export default Card;