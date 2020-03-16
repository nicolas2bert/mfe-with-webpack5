import React from 'react';
import ReactDOM from 'react-dom';
import App1 from './App1';
import { createStore } from 'redux'
import rootReducer from './reducers';
import { Provider } from 'react-redux'

const store = createStore(rootReducer)

ReactDOM.render(<App1 store={store}/>,
    document.getElementById('app'));
