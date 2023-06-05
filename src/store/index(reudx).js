import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
const store = createStore(reducer, applyMiddleware(logger, thunk, promiseMiddleware));
export default store;
