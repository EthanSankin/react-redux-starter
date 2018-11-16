import ReactDOM from 'react-dom';
import React from 'react';
import App from './app';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger';
import { rootSaga } from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

// Create a redux store with some middleware
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger)
);

// Run our root saga 
sagaMiddleware.run(rootSaga);

// Redner the aplication
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root')
);
