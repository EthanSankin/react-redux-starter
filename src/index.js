import ReactDOM from 'react-dom';
import React from 'react';
import App from './app';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
