import {createActions} from 'redux-actions';

export const {
    startGame,
    endGame,
    changeSkins,
    changeDifficulty,
} = createActions(
    'START_GAME',
    'END_GAME',
    'CHANGE_SKINS',
    'CHANGE_DIFFICULTY',
);


