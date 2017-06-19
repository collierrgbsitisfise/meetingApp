import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import routes from './routes';

const store = createStore(
    (state = {}) => state,
    applyMiddleware(thunk)
)

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ hashHistory } routes={ routes }></Router>
    </Provider>,
    document.getElementById('root')
);