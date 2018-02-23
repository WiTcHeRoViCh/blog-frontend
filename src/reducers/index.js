import { combineReducers } from 'redux';
import users from './userReducer';
import current_user from './currentUserReducer';

export default combineReducers({
    users,
    current_user,
});