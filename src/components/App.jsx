import React from 'react';
//components
import Main from "./Main.jsx";
import SkinsCard from "./SkinsCard.jsx";
import LevelGame from "./LevelGame.jsx";
import ButtonNewGame from "./ButtonNewGame.jsx";

//styles
import RootStyle from "../styles";
import useStyles from '../styles/components/App';


const App= ()=>{
    RootStyle();
    const classes=useStyles();

    return(
        <>
            <div className={classes.row}>
                <div className={classes.positionSettings}>
                    <SkinsCard/>
                    <LevelGame/>

                </div>
                <div className={classes.positionButton}>
                    <ButtonNewGame/>
                </div>
            </div>
            <div className={classes.mainSize}>
                <Main />
            </div>

        </>
    )
}

export default App;