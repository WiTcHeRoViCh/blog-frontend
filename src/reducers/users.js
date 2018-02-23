import { injectReducer } from './helpers/injectReducer';
import { usersInitialState } from '../store/initialState';
import { REQUEST, SET_USERS, SUCCESS, FAILURE } from '../actions/actionTypes';
import { status } from '../constants';


const userHandlers = {
    [`${SET_USERS}_${REQUEST}`]: (state, { type }) => ({
        ...state,
        ...status.request(type)
    }),
    [`${SET_USERS}_${SUCCESS}`]: (state, { type, users }) => ({
        ...state,
        users,
        ...status.success(type)
    }),
    [`${SET_USERS}_${FAILURE}`]: (state, { type }) => ({
        ...state,
        ...status.failure(type)
    }),
};

export default injectReducer(usersInitialState, userHandlers);
