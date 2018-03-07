import { combineReducers } from 'redux';
import userReducer from './userReducer';
import currentUserReducer from './currentUserReducer';
import postReducer from './postReducer';

export default combineReducers({
    userReducer,
    currentUserReducer,
    postReducer,
});