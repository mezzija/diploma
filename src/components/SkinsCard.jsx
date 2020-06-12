import React,{useRef} from 'react';
import {useSelector,useDispatch} from "react-redux";
import ClassNames from 'classnames'
//style
import useStyles from '../styles/components/SkinsCard'
//image
import {logo1,logo2,logo3} from '../constants/logo';
//action
import {changeSkins} from "../action";


const SkinsCard=()=>{
    const classes=useStyles();
    const active=useSelector(store=>store.start.play);
    const dispatch=useDispatch();
    const skinProgramming=useRef(null);
    const skinJs=useRef(null);
    const skinMystery=useRef(null);
    const handleClick=(event)=>{
        skinProgramming.current.classList.remove(classes.activeButton);
        skinJs.current.classList.remove(classes.activeButton);
        skinMystery.current.classList.remove(classes.activeButton);

        event.target.classList.add(classes.activeButton)
        dispatch(changeSkins(event.target.id))
    }
    return(
        <div className={ClassNames(classes.skinCardStyle,{[classes.active]:active})}>
            <p>Skins card</p>
            <div>
                <img onClick={handleClick} ref={skinProgramming} className={classes.activeButton} id="skinProgramming" src={logo1} alt=""/>
            </div>
            <div>
                <img onClick={handleClick} ref={skinJs} id="skinJs" src={logo2} alt=""/>
            </div>
            <div>
                <img  onClick={handleClick} ref={skinMystery} id="skinMystery" src={logo3} alt=""/>
            </div>
        </div>
    );


}

SkinsCard.displayName = 'SkinsCard';

export default SkinsCard;