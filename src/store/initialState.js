import { GET_USER, SET_USERS } from '../actions/actionTypes';

const defaultStatus = { request: false, success: false, failure: false };

export const usersInitialState = {
    users: [],
    user: '',

    [`${SET_USERS}`]: defaultStatus,
    [`${GET_USER}`]: defaultStatus,
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
};