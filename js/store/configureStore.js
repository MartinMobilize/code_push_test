/**
 * @flow
 */

import {
   applyMiddleware,
   createStore, 
   combineReducers 
  } from 'redux';
  
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import { enableBatching } from 'redux-batched-actions';

import * as reducers from "../reducers";

const reducer = combineReducers(reducers);

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});

export default configureStore = () => {
    const store = createStore(enableBatching(reducer), applyMiddleware(thunk, logger));
   // const store = Reactotron.createStore(reducer, applyMiddleware(thunk));
    if (isDebuggingInChrome) { window.store = store; }
    return store;
}