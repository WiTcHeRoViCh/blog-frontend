import { injectReducer } from './helpers/injectReducer';
import { postsInitialState } from '../store/initialState';
import { REQUEST, SUCCESS, FAILURE, GET_USERS_POSTS } from '../actions/actionTypes';
import { status } from '../helperFunctions';

const postHandlers = {
    [`${GET_USERS_POSTS} ${REQUEST}`]: (state, { type }) => ({
        ...state,
        ...status.request(type),
    }),
    [`${GET_USERS_POSTS} ${SUCCESS}`]: (state, { type, serverResponse }) => ({
        ...state,
        posts: [...serverResponse.data.posts],
        ...status.success(type),
    }),
    [`${GET_USERS_POSTS} ${FAILURE}`]: (state, { type }) => ({
        ...state,
        ...status.failure(type),
    }),
};

export default injectReducer(postsInitialState, postHandlers);