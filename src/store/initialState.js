import {GET_USER, GET_USERS, GET_USER_POSTS, SIGN_UP_USER, SIGN_OUT_USER, SIGN_IN_USER } from '../actions/actionTypes';

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
    [`${GET_USER_POSTS}`]: defaultStatus,
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
};