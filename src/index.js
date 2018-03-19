import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './store/reducers/auth';
import meetingroomReducer from './store/reducers/meetingroom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

const rootReducer = combineReducers({
    auth: authReducer,
    meetingroom: meetingroomReducer
})

const logger = store => {
    return next => {
        // the main method "action"
        return action => {
            //the method you want to execute
            console.log('[Middleware] Disaptching', action);
            const result = next(action);
            console.log('[Middleware] next state ', store.getState());
            return result;
        }
    }
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(logger, thunk)
));

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)



ReactDOM.render(<Provider store={store}>{app}</Provider>, document.getElementById('root'));
registerServiceWorker();
