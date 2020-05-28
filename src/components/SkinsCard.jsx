import React from 'react';
//style
import useStyles from '../styles/components/SkinsCard'
//image
import {logo1,logo2,logo3} from '../constants/skin1';

const SkinsCard=()=>{
    const classes=useStyles();
    return(
        <div className={classes.skinCardStyle}>
            <p>Skins card</p>
            <a href="#">
                <img src={logo1} alt=""/>
            </a>
            <a href="#">
                <img src={logo2} alt=""/>
            </a>
            <a href="#">
                <img src={logo3} alt=""/>
            </a>
        </div>
    );


}
export default SkinsCard;