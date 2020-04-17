import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Auth from './store/reducers/Auth';
import Home from './store/reducers/Home';
import MyCards from './store/reducers/MyCards';
import MainLayout from './store/reducers/MainLayout';
import Contests from './store/reducers/Contests';
import Leaders from './store/reducers/Leaders';
import Wallet from './store/reducers/Wallet';
import Account from './store/reducers/Account';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

const getBasename = () => {
    return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

/*
 * combining all the reducers
 */
const rootReducer = combineReducers({
    auth: Auth,
    mainLayout: MainLayout,
    home: Home,
    myCards: MyCards,
    contests: Contests,
    leaders: Leaders,
    wallet: Wallet,
    account: Account
});

/*
 * composeEnhancers is for chrome dev toolbar which helps us see store management of redux
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/*
 * Creating Store and applying middleware 
 */
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

/*
 * Wrapping the main app with BrowserRouter (provides routing and helps us navigate through project)
 * Provider is a part of Redux which is needed in order to get access to store throughout our project 
 */
const app = (
    <Provider store={store}>
        <BrowserRouter basename={getBasename()}>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.register();
