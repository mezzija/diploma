import {createActions} from 'redux-actions';

export const {
    startGame,
    changeSkins,
    changeDifficulty,
} = createActions(
    'START_GAME',
    'CHANGE_SKINS',
    'CHANGE_DIFFICULTY',
);


