import React from 'react';
import { hot } from 'react-hot-loader/root';
// components
import Main from './Main';
import SkinsCard from './SkinsCard';
import LevelGame from './LevelGame';
import ButtonNewGame from './ButtonNewGame';
import Timer from './Timer';
import ModalLogin from './ModalLogin';
// styles
import RootStyle from '../styles';
import useStyles from '../styles/components/App';

const App = () => {
  RootStyle();
  const classes = useStyles();

  return (
    <>
      <ModalLogin />
      <div className={classes.row}>
        <div className={classes.positionSettings}>
          <SkinsCard />
          <LevelGame />

        </div>
        <div>
          <Timer />
        </div>

        <div className={classes.positionButton}>
          <ButtonNewGame />
        </div>
      </div>
      <div className={classes.mainSize}>
        <Main />
      </div>

    </>
  );
};

App.displayName = 'App';
export default hot(App);
