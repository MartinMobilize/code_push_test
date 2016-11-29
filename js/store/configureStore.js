import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});

reducer = () => {};

export default configureStore = () => {
    const store = createStore(reducer, applyMiddleware(thunk, logger));
    if (isDebuggingInChrome) { window.store = store; }
    return store;
}