import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducers from '../reducers';
import { requestMiddleware } from '../middlewares/';

export default createStore(reducers, applyMiddleware( requestMiddleware, logger));