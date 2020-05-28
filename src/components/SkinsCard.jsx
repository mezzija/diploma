import React from 'react';
import {useSelector} from "react-redux";
import ClassNames from 'classnames'
//style
import useStyles from '../styles/components/SkinsCard'
//image
import {logo1,logo2,logo3} from '../constants/skin1';

const SkinsCard=()=>{
    const classes=useStyles();
    const active=useSelector(store=>store.start.play);
    const handleClick=(event)=>{
        debugger
        console.log(event.target);
    }
    return(
        <div className={ClassNames(classes.skinCardStyle,{[classes.active]:active})}>
            <p>Skins card</p>
            <div>
                <img onClick={handleClick} src={logo1} alt=""/>
            </div>
            <div>
                <img onClick={handleClick} src={logo2} alt=""/>
            </div>
            <div>
                <img  onClick={handleClick} src={logo3} alt=""/>
            </div>
        </div>
    );


}
export default SkinsCard;