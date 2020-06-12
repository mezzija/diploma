import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'react-jss'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

//component
import App from "./components/App.jsx";
//theme
import main from './styles/theme/main'
//store
import {store,persistor} from './store'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor} >
                <ThemeProvider theme={main}>
                    <App/>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)