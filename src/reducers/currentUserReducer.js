import { injectReducer } from './helpers/injectReducer';
import { currentUserInitialState } from '../store/initialState';
import { REQUEST, SUCCESS, FAILURE, SIGN_IN_USER } from '../actions/actionTypes';
import { status } from '../helperFunctions';


const currentUserHandlers = {
    // Current user sign in
    [`${SIGN_IN_USER}_${REQUEST}`]: (state, { type }) => ({
        ...state,
        ...status.request(type),
    }),
    [`${SIGN_IN_USER}_${SUCCESS}`]: (state, { type, serverResponse }) => {
        const { token } = serverResponse.data;
        localStorage.setItem('token', token);

        return ({
            ...state,
            current_user: {
                online: true,
                ...serverResponse.data.user,
            },
            token,
            ...status.success(type),
        })
    },
    [`${SIGN_IN_USER}_${FAILURE}`]: (state, { type }) => ({
        ...state,
        ...status.failure(type),
    }),
};

export default injectReducer(currentUserInitialState, currentUserHandlers);
