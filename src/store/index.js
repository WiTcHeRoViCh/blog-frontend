import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducers from '../reducers';
import middlewares from '../middlewares/';

export default createStore(reducers, applyMiddleware( ...middlewares, logger));