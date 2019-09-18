import { createStore, compose } from 'redux';
import allReducers from './reducers';

let enhancer = compose;

// eslint-disable-next-line no-undef
if (__DEV__) {
  // eslint-disable-next-line no-undef
  enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

/**
 * createStore for the app
 * {allReducers} container of the reducer
 */
const store = createStore(allReducers, enhancer());

export default store;
