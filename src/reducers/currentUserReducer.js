import { injectReducer } from './helpers/injectReducer';
import { currentUserInitialState } from '../store/initialState';
import {REQUEST, SUCCESS, FAILURE, SIGN_IN_USER, SIGN_OUT_USER} from '../actions/actionTypes';
import { status } from '../helperFunctions';


const currentUserHandlers = {
    // Current user sign in
    [`${SIGN_IN_USER} ${REQUEST}`]: (state, { type }) => ({
        ...state,
        ...status.request(type),
    }),
    [`${SIGN_IN_USER} ${SUCCESS}`]: (state, { type, serverResponse }) => {
        const { token } = serverResponse.data;
        (token) ? localStorage.setItem('token', token) : null;

        return ({
            ...state,
            currentUser: {
                isOnline: true,
                ...serverResponse.data.user,
            },
            token,
            ...status.success(type),
        })
    },
    [`${SIGN_IN_USER} ${FAILURE}`]: (state, { type }) => ({
        ...state,
        ...status.failure(type),
    }),

    //Current user sign out
    [`${SIGN_OUT_USER} ${REQUEST}`]: (state, { type }) => ({
        ...state,
        ...status.request(type),
    }),
    [`${SIGN_OUT_USER} ${SUCCESS}`]: (state, { type, serverResponse }) => {
        const { token } = serverResponse.data;
        localStorage.setItem('token', token);

        return ({
            ...state,
            currentUser: {
                isOnline: false,
                _id: null,
                username: null,
                password: null,
                posts: [],
            },
            token,
            ...status.success(type),
        })
    },
    [`${SIGN_OUT_USER} ${FAILURE}`]: (state, { type }) => ({
        ...state,
        ...status.failure(type),
    }),
};

export default injectReducer(currentUserInitialState, currentUserHandlers);
