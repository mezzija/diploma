import React, { memo } from 'react';
import {
  object, func, number,
} from 'prop-types';
import ClassNames from 'classnames';
// style
import useStyle from '../styles/components/Card';
import { tms } from '../constants/logo';

// image

const Card = ({ skin, ...props }) => {
  const classes = useStyle();
  const handleClick = () => {
    if (props.counter < 2) props.changeStatus(skin.key);
  };
  return (
    <div className={ClassNames(classes.flipCard, { [classes.disable]: skin.disable })}>
      <div onClick={handleClick} className={ClassNames(classes.flipCardInner, { [classes.active]: skin.status })}>
        <div className={classes.flipCardFront}>
          <img src={tms} alt="front" />
        </div>
        <div className={classes.flipCardBack}>
          <img src={skin.src} alt="back" />
        </div>
      </div>

    </div>
  );
};
Card.displayName = 'Card';
Card.propTypes = {
  skin: object.isRequired,
  changeStatus: func.isRequired,
  counter: number.isRequired,
};
export default memo(Card);
