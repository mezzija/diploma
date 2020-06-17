import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';

import CloneDeep from 'lodash.clonedeep';
// image
import skin1 from '../constants/skin1';
import skin2 from '../constants/skin2';
import skin3 from '../constants/skin3';

// component
import Card from './Card';
import StartWindow from './StartWindow';
import FinishWindow from './FinishWindow';
// style
import useStyle from '../styles/components/Main';

const shortId = require('shortid');

const Main = () => {
  const history = useHistory();
  const classes = useStyle();
  const [currentSkins, setCurrentSkins] = useState([]);
  const [active, setActive] = useState(false);
  const [counter, setCounter] = useState(0);

  const { difficulty, play, skinCard } = useSelector((store) => store.start);

  let skin = [];
  if (skinCard === 'skinProgramming') skin = [...skin1];
  else if (skinCard === 'skinJs') skin = [...skin2];
  else if (skinCard === 'skinMystery') skin = [...skin3];

  useEffect(() => {
    const finish = currentSkins.filter((item) => item.disable === true);
    if (play) {
      if (finish.length === currentSkins.length) {
        history.push('/finish');
      }
    }
  }, [currentSkins]);

  useEffect(() => {
    if (play) {
      let skins = [...skin];
      if (difficulty === 'easy') {
        skins = skins.slice(0, 5);
      } else if (difficulty === 'medium') {
        skins = skins.slice(0, 9);
      }
      setCurrentSkins(shuffle([...skins, ...skins].map((item) => ({
        src: item,
        status: false,
        disable: false,
        key: shortId.generate(),
      }))));
    }
  }, [play]);

  useEffect(() => {
    if (active) {
      setTimeout(changeOpened, 1000);
    }
  }, [active]);

  const changeOpened = () => {
    const newState = CloneDeep(currentSkins);
    const openCard = newState.filter((item) => item.status === true);
    if (openCard[0].src === openCard[1].src) {
      newState.forEach((item) => {
        if (item === openCard[0]) {
          item.disable = true;
          item.status = false;
        }
        if (item === openCard[1]) {
          item.disable = true;
          item.status = false;
        }
      });
    } else {
      newState.forEach((item) => {
        if (item === openCard[0]) item.status = false;
        if (item === openCard[1]) item.status = false;
      });
    }
    setActive(false);
    setCurrentSkins(newState);
    setCounter(0);
  };

  const changeStatus = (key) => {
    const newState = CloneDeep(currentSkins);
    const check = newState.filter((item) => item.status === false);
    const openCard = newState.find((item) => item.status === true);
    const currentCard = newState.find((item) => item.key === key);

    if (openCard && openCard.key !== currentCard.key) {
      setCounter((prevState) => prevState + 1);
      if (openCard.src === currentCard.src) {
        newState.forEach((item) => {
          if (item === currentCard) {
            item.status = true;
          }
        });
      } else {
        newState.forEach((item) => {
          if (item === currentCard) {
            item.status = true;
          }
        });
      }
      setActive(true);
      setCurrentSkins(newState);
    } else if (check.length === newState.length) {
      setCounter((prevState) => prevState + 1);
      newState.forEach((item) => {
        if (item.key === key) {
          item.status = true;
        }
      });
      setCurrentSkins(newState);
    }
  };
  return (
    <Switch>
      <Route path="/" exact>
        <StartWindow />
      </Route>
      <Route path="/game">
        <div className={classes[difficulty]}>
          {currentSkins.map((item) => (
            <Card
              key={item.key}
              skin={item}
              changeStatus={changeStatus}
              counter={counter}
            />
          ))}
        </div>
      </Route>
      <Route path="/finish">
        <FinishWindow />
      </Route>
    </Switch>

  );
};

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  return array;
}

Main.displayName = 'Main';

export default Main;
