import { injectReducer } from './helpers/injectReducer';
import { usersInitialState } from '../store/initialState';
import { REQUEST, GET_USERS, SUCCESS, FAILURE, SIGN_UP_USER } from '../actions/actionTypes';
import { status } from '../helperFunctions';


const userHandlers = {
// Get users list
    [`${GET_USERS}_${REQUEST}`]: (state, { type }) => ({
        ...state,
        ...status.request(type),
    }),
    [`${GET_USERS}_${SUCCESS}`]: (state, { type, serverResponse }) => ({
        ...state,
        users: serverResponse.data.users,
        ...status.success(type),
    }),
    [`${GET_USERS}_${FAILURE}`]: (state, { type }) => ({
        ...state,
        ...status.failure(type),
    }),
// Sing up
    [`${SIGN_UP_USER}_${REQUEST}`]: (state, { type }) => ({
        ...state,
        ...status.request(type),
    }),
    [`${SIGN_UP_USER}_${SUCCESS}`]: (state, { type }) => ({
        ...state,
        ...status.success(type),
    }),
    [`${SIGN_UP_USER}_${FAILURE}`]: (state, { type }) => ({
        ...state,
        ...status.failure(type),
    }),
};

export default injectReducer(usersInitialState, userHandlers);
