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
import LevelGame from "./LevelGame";


const Main = () => {

    const classes = useStyle();
    const [currentSkins, setCurrentSkins] = useState([]);
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
                status: 'closed',
                key: shortId.generate()
            }))));
        }
    }, [play]);


    const changeStatus = (key) => {
        const newState = CloneDeep(currentSkins);
        const openCard = newState.find(item => item.status === 'opened');
        const currentCard = newState.find(item => item.key === key);
        if (openCard) {
            if (openCard.src === currentCard.src) {
                newState.forEach(item => {
                    if (item === openCard) item.status = 'disable';
                    if (item === currentCard) item.status = 'disable';
                })
            } else {
                newState.forEach(item => {
                    if (item === openCard) item.status = 'closed';
                    if (item === currentCard) item.status = 'closed';
                })
            }
            setTimeout(() => {
                setCurrentSkins(newState)
            }, 1000);
        } else {
            newState.forEach(item => {
                if (item.key === key) {
                    item.status = 'opened';
                }
            })
            setCurrentSkins(newState);
        }
    }
    console.log(currentSkins);
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