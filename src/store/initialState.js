import {
    GET_USER, GET_USERS, SIGN_UP_USER, SIGN_OUT_USER, SIGN_IN_USER, GET_USER_WITH_POSTS, DELETE_USER_POST,
} from '../actions/actionTypes';

const defaultStatus = { request: false, success: false, failure: false };

export const usersInitialState = {
    users: [],
    user: {
        _id: null,
        username: null,
        posts: [],
    },

    [`${GET_USERS}`]: defaultStatus,
    [`${GET_USER}`]: defaultStatus,
    [`${GET_USER_WITH_POSTS}`]: defaultStatus,
    [`${SIGN_UP_USER}`]: defaultStatus,
};

export const currentUserInitialState = {
    currentUser: {
        isOnline: false,
        _id: null,
        username: null,
        password: null,
        posts: [],
    },
    token: null,

    [`${SIGN_IN_USER}`]: defaultStatus,
    [`${SIGN_OUT_USER}`]: defaultStatus,
    [`${DELETE_USER_POST}`]: defaultStatus,
};