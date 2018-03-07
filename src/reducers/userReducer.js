import { injectReducer } from './helpers/injectReducer';
import { usersInitialState } from '../store/initialState';
import { REQUEST, GET_USERS, GET_USER, GET_USER_WITH_POSTS, ADD_USER_POSTS, SUCCESS, FAILURE, SIGN_UP_USER } from '../actions/actionTypes';
import { status } from '../helperFunctions';


const userHandlers = {
// Get users list
    [`${GET_USERS} ${REQUEST}`]: (state, { type }) => ({
        ...state,
        ...status.request(type),
    }),
    [`${GET_USERS} ${SUCCESS}`]: (state, { type, serverResponse }) => ({
        ...state,
        users: serverResponse.data.users.map(user => {return { avatarUrl: state.user.avatarUrl, ...user };}),
        ...status.success(type),
    }),
    [`${GET_USERS} ${FAILURE}`]: (state, { type }) => ({
        ...state,
        ...status.failure(type),
    }),

// Get single user
    [`${GET_USER} ${REQUEST}`]: (state, { type }) => ({
        ...state,
        ...status.request(type),
    }),
    [`${GET_USER} ${SUCCESS}`]: (state, { type, serverResponse }) => ({
        ...state,
        user: {...state.user, ...serverResponse.data.user },
        ...status.success(type),
    }),
    [`${GET_USER} ${FAILURE}`]: (state, { type }) => ({
        ...state,
        ...status.failure(type),
    }),

// Get users post
    [`${GET_USER_WITH_POSTS} ${REQUEST}`]: (state, { type }) => ({
        ...state,
        ...status.request(type),
    }),
    [`${GET_USER_WITH_POSTS} ${SUCCESS}`]: (state, { type, serverResponse }) => {
        const { user, posts } = serverResponse.data;

        return {
            ...state,
            user: { ...state.user, ...user, posts: Array.from(posts) },
            ...status.success(type),
        };
    },
    [`${GET_USER_WITH_POSTS} ${FAILURE}`]: (state, { type }) => ({
        ...state,
        ...status.failure(type),
    }),

    // Posts
    [`${ADD_USER_POSTS} ${REQUEST}`]: (state, { type }) => ({
        ...state,
        ...status.request(type),
    }),
    [`${ADD_USER_POSTS} ${SUCCESS}`]: (state, { type, serverResponse }) => {
        const { user, post } = serverResponse.data;
        const { posts } = state.user;

        return {
            ...state,
            user: { ...state.user, ...user, posts: [...posts, post ] },
            ...status.success(type),
        };
    },
    [`${ADD_USER_POSTS} ${FAILURE}`]: (state, { type }) => ({
        ...state,
        ...status.failure(type),
    }),


// Sing up
    [`${SIGN_UP_USER} ${REQUEST}`]: (state, { type }) => ({
        ...state,
        ...status.request(type),
    }),
    [`${SIGN_UP_USER} ${SUCCESS}`]: (state, { type }) => ({
        ...state,
        ...status.success(type),
    }),
    [`${SIGN_UP_USER} ${FAILURE}`]: (state, { type }) => ({
        ...state,
        ...status.failure(type),
    }),
};

export default injectReducer(usersInitialState, userHandlers);
