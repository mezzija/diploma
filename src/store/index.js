import {createStore} from "redux";

import {devToolsEnhancer} from 'redux-devtools-extension'

import reducers from "../reduсers";

const store=createStore(
    reducers,
    devToolsEnhancer(),
);

export default store;