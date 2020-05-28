import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'react-jss'
import { Provider } from 'react-redux';

//component
import App from "./components/App.jsx";
//theme
import main from './styles/theme/main'
//store
import store from './store'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={main}>
                <App/>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)