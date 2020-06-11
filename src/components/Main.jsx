import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

const shortId = require('shortid');
import CloneDeep from 'lodash.clonedeep';
//image
import skin1 from '../constants/skin1'

//component
import Card from "./Card.jsx";
//style
import useStyle from '../styles/components/Main'


const Main = () => {

    const classes = useStyle();
    const [currentSkins, setCurrentSkins] = useState([]);
    const [active,setActive]=useState(false)
    const level = useSelector(store => store.start.difficulty);// сделать один обьект
    const play = useSelector(store => store.start.play);

    const skin = [...skin1]

    useEffect(() => {
        if (play) {
            let skins = [...skin];
            if (level === 'easy') {
                skins = skins.slice(0, 5);
            } else if (level === 'medium') {
                skins = skins.slice(0, 9);
            }
            setCurrentSkins(shuffle([...skins, ...skins].map(item => ({
                src: item,
                status: false,
                disable: false,
                key: shortId.generate()
            }))));
        }
    }, [play]);

    useEffect(()=>{
        if(active){
            setTimeout(changeOpened,1000);
        }
    },[active])

    const  changeOpened=()=>{
        const newState = CloneDeep(currentSkins);
        const openCard = newState.filter(item => item.status === true);
        if(openCard[0].src===openCard[1].src) {
            newState.forEach(item=>{
                if(item===openCard[0]){
                    item.disable=true;
                    item.status=false;
                }
                if(item===openCard[1]){
                    item.disable=true;
                    item.status=false;
                }
            })
        }else {
            newState.forEach(item=>{
                if(item===openCard[0]) item.status=false;
                if(item===openCard[1]) item.status=false;
            })
        }
        setActive(false);
        setCurrentSkins(newState);
    }

    const changeStatus = (key) => {
        const newState = CloneDeep(currentSkins);
        const openCard = newState.find(item => item.status === true);
        const currentCard = newState.find(item => item.key === key);
        if (openCard) {
            if (openCard.src === currentCard.src) {
                newState.forEach(item => {
                    if (item ===currentCard) {
                        item.status = true;
                    }
                });
            } else {
                newState.forEach(item => {
                    if (item ===currentCard) {
                        item.status = true;
                    }
                });
            }
            setActive(true);
            setCurrentSkins(newState)
        } else {
            newState.forEach(item => {
                if (item.key === key) {
                    item.status = true;
                }
            });
            setCurrentSkins(newState);
        }
    }

    console.log(currentSkins)

    return (
        <>
            {
                play
                    ?
                    <div className={classes[level]}>
                        {currentSkins.map(item => (
                            <Card
                                key={item.key}
                                skin={item}
                                changeStatus={changeStatus}
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

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
}


Main.displayName = 'Main';

export default Main;

/*newState.forEach(item => {
                    if (item === openCard) item.disable = true;
                    if (item === currentCard) item.disable = true;
})
setCurrentSkins(newState)*/
/*newState.forEach(item => {
                    if (item === openCard) item.status = false;
                    if (item === currentCard) item.status = false;
})
setCurrentSkins(newState)*/