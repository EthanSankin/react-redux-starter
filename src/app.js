import React, { Component } from 'react';
import { hot } from 'react-hot-loader'
import Counter from './components/counter';

class App extends Component {
    render() {
        return (
            <div>
                <span>Welcome to React-Redux Boilerplate</span>
                <Counter />
            </div>
        );
    }
}

export default hot(module)(App)