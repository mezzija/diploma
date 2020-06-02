import React,{useEffect,useState} from 'react';
import {useSelector} from "react-redux";
const shortId = require('shortid');
//image
import skin1 from '../constants/skin1'
import {tms} from '../constants/logo'
//component
import Card from "./Card.jsx";
//style
import useStyle from '../styles/components/Main'


const Main=()=>{
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
        return array;
    }
    const classes=useStyle();
    const [currentSkins,setCurrentSkins]=useState([]);
    const level=useSelector(store=>store.start.difficulty);
    const play=useSelector(store=>store.start.play);

    const skin=[...skin1]

    useEffect(()=>{
        if(play){
            let skins=[...skin];
            if(level==='easy'){
                skins=skins.slice(0,5);
            }else if (level==='medium'){
                skins=skins.slice(0,9);
            }
            setCurrentSkins(shuffle([...skins,...skins].map(item=>({src:item,status:'closed',key:shortId.generate()}))));
        }
    },[play]);
    console.log(currentSkins);
    return(
        <>
            {
                play
                    ?
                    <div className={classes[level]}>
                        {currentSkins.map(item=>(
                            <Card
                                key={item.key}
                                skin={item.src}
                                front={tms}
                            />
                        ))
                        }
                     </div>
                    :
                    <p>hello</p>
            }
        </>

    )
}
export default Main;