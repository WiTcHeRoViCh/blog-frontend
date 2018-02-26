import { GET_USER, SET_USERS, ADD_USER, DELETE_USER } from '../actions/actionTypes';

const defaultStatus = { request: false, success: false, failure: false };

export const usersInitialState = {
    users: [],
    user: '',

    [`${SET_USERS}`]: defaultStatus,
    [`${GET_USER}`]: defaultStatus,
    [`${ADD_USER}`]: defaultStatus,
    [`${DELETE_USER}`]: defaultStatus,
};

export const currentUserInitialState = {
    current_user: {
        online: false,
        _id: null,
        username: null,
        password: null,
        posts: [],
    },
    token: null,
};