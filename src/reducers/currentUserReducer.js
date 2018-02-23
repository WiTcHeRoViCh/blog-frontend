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
    [`${SIGN_IN_USER}_${SUCCESS}`]: (state, { type, serverResponse }) => ({
        ...state,
        current_user: { online: true, ...serverResponse.data },
        ...status.success(type),
    }),
    [`${SIGN_IN_USER}_${FAILURE}`]: (state, { type }) => ({
        ...state,
        ...status.failure(type),
    }),
};

export default injectReducer(currentUserInitialState, currentUserHandlers);
