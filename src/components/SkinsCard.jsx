import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import ClassNames from 'classnames'
//style
import useStyles from '../styles/components/SkinsCard'
//image
import {logo1,logo2,logo3} from '../constants/logo';
//action
import {changeSkins} from "../action";
import Main from "./Main";

const SkinsCard=()=>{
    const classes=useStyles();
    const active=useSelector(store=>store.start.play);
    const dispatch=useDispatch();
    const handleClick=(event)=>{
        dispatch(changeSkins(event.target.id))
    }
    return(
        <div className={ClassNames(classes.skinCardStyle,{[classes.active]:active})}>
            <p>Skins card</p>
            <div>
                <img onClick={handleClick} id="skinProgramming" src={logo1} alt=""/>
            </div>
            <div>
                <img onClick={handleClick} id="skinJs" src={logo2} alt=""/>
            </div>
            <div>
                <img  onClick={handleClick}  id="skinMystery" src={logo3} alt=""/>
            </div>
        </div>
    );


}

SkinsCard.displayName = 'SkinsCard';

export default SkinsCard;