import React from 'react';
import ReactDOM from 'react-dom';
import Shell from './Shell';
import { createStore, combineReducers } from 'redux';
import init from './reducers/init';

const shellReducer = combineReducers({
  init,
});

const rootReducer = createReducer({});

const store = createStore(rootReducer);

store.asyncReducers = {};


store.addReducer = (key, reducer) => {
    store.asyncReducers[key] = reducer;
    console.log('store1!!!', store);
    store.replaceReducer(createReducer(store.asyncReducers));
    console.log('store2!!!', store);
}

ReactDOM.render(<Shell store={store}/>,
    document.getElementById('app'));

function createReducer(asyncReducers) {
    return combineReducers({
        shell: shellReducer,
        ...asyncReducers,
    })
}
