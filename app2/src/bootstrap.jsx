import React from 'react';
import ReactDOM from 'react-dom';
import App2 from './App2';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(<App2 store={store}/>,
    document.getElementById('app'));
