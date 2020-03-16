import React from 'react';
import ReactDOM from 'react-dom';
import App1 from './App1';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(<App1 store={store}/>,
    document.getElementById('app'));
