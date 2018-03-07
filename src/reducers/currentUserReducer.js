import { injectReducer } from './helpers/injectReducer';
import { currentUserInitialState } from '../store/initialState';
import {
    REQUEST, SUCCESS, FAILURE, SIGN_IN_USER, SIGN_OUT_USER, DELETE_USER_POST,
    ADD_USER_POSTS, EDIT_USER_POST, AUTO_SIGN_IN,
} from '../actions/actionTypes';
import { status } from '../helperFunctions';


const currentUserHandlers = {
    // Delete currentUser post
    [`${DELETE_USER_POST} ${REQUEST}`]: (state, { type }) => ({
        ...state,
        ...status.request(type),
    }),
    [`${DELETE_USER_POST} ${SUCCESS}`]: (state, { type, serverResponse }) => {
        const { postId } = serverResponse.data;
        const currentUser = state.currentUser;

        return ({
            ...state,
            currentUser: {
                ...currentUser,
                posts: currentUser.posts.filter(post => post._id !== postId),
            },
            ...status.success(type),
        });
    },
    [`${DELETE_USER_POST} ${FAILURE}`]: (state, { type }) => ({
        ...state,
        ...status.failure(type),
    }),


    // Add post to currentUser
    [`${ADD_USER_POSTS} ${REQUEST}`]: (state, { type }) => ({
        ...state,
        ...status.request(type),
    }),
    [`${ADD_USER_POSTS} ${SUCCESS}`]: (state, { type, serverResponse }) => {
        const { post } = serverResponse.data;
        const currentUser = state.currentUser;

        return ({
            ...state,
            currentUser: {
                ...currentUser,
                posts: currentUser.posts.concat(post),
            },
            ...status.success(type),
        });
    },
    [`${ADD_USER_POSTS} ${FAILURE}`]: (state, { type }) => ({
        ...state,
        ...status.failure(type),
    }),


    // Edit currentUser post
    [`${EDIT_USER_POST} ${REQUEST}`]: (state, { type }) => ({
        ...state,
        ...status.request(type),
    }),
    [`${EDIT_USER_POST} ${SUCCESS}`]: (state, { type, serverResponse }) => {
        const { post } = serverResponse.data;
        const currentUser = state.currentUser;

        return ({
            ...state,
            currentUser: {
                ...currentUser,
                posts: currentUser.posts.map(curPost => curPost._id === post._id ?
                    {...post} :
                    curPost,
                ),
            },
            ...status.success(type),
        });
    },
    [`${EDIT_USER_POST} ${FAILURE}`]: (state, { type }) => ({
        ...state,
        ...status.failure(type),
    }),

    // Auto sign in
    [`${AUTO_SIGN_IN} ${REQUEST}`]: (state, { type }) => ({
        ...state,
        ...status.request(type),
    }),
    [`${AUTO_SIGN_IN} ${SUCCESS}`]: (state, { type, serverResponse }) => {
        const { token, user } = serverResponse.data;
        (token) ? localStorage.setItem('token', token) : null;

        return ({
            ...state,
            currentUser: {
                ...state.currentUser,
                isOnline: true,
                ...user,
            },
            token,
            ...status.success(type),
        })
    },
    [`${AUTO_SIGN_IN} ${FAILURE}`]: (state, { type }) => ({
        ...state,
        ...status.failure(type),
    }),

    // Current user sign in
    [`${SIGN_IN_USER} ${REQUEST}`]: (state, { type }) => ({
        ...state,
        ...status.request(type),
    }),
    [`${SIGN_IN_USER} ${SUCCESS}`]: (state, { type, serverResponse }) => {
        const { token, user } = serverResponse.data;
        (token) ? localStorage.setItem('token', token) : null;

        return ({
            ...state,
            currentUser: {
                ...state.currentUser,
                isOnline: true,
                ...user,
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
                ...currentUserInitialState.currentUser,
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
