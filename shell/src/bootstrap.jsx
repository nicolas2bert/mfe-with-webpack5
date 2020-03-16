import React from 'react';
import ReactDOM from 'react-dom';
import Shell from './Shell';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import init from './reducers/init';

const shellReducer = combineReducers({
  init,
});

const rootReducer = createReducer({});

const store = createStore(rootReducer, applyMiddleware(thunk));

store.asyncReducers = {};


store.addNamespacedReducer = (key, reducer) => {
    store.asyncReducers[key] = namespaceReducer(reducer, key);
    store.replaceReducer(createReducer(store.asyncReducers));
}

store.getNameSpacedStore = key => {
    const myStore = {...store};
    myStore.getState = () => store.getState()[key];
    myStore.dispatch = action => populateStoreWithNamespace(key, store.dispatch, action);
    return myStore;
}

ReactDOM.render(<Shell store={store}/>,
    document.getElementById('app'));

function createReducer(asyncReducers) {
    return combineReducers({
        shell: shellReducer,
        ...asyncReducers,
    })
}

function namespaceReducer(reducerFunction, namespace){
   return (state, action) => {
     const isInitializationCall = (state === undefined);
     if(action.namespace !== namespace && !isInitializationCall) return state;

     return reducerFunction(state, action);
   };
}

function populateStoreWithNamespace(key, originalDispatch, action){
    if (typeof action === 'object') {
        action.namespace = key;
    }
    if (typeof action === 'function') {
        const originalThunkAction = action;
        const thunkAction = (dispatch, getState) => {
            const originalDispatch = dispatch;
            dispatch = action => populateStoreWithNamespace(key, originalDispatch, action);
            originalThunkAction(dispatch, getState);
        };
        action = thunkAction;
    }
    // handle other cases if needed.
    return originalDispatch(action);
}
