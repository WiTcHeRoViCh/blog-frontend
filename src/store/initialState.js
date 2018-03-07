import {
    GET_USER,
    GET_USERS,
    SIGN_UP_USER,
    SIGN_OUT_USER,
    SIGN_IN_USER,
    AUTO_SIGN_IN,
    GET_USER_WITH_POSTS,
    DELETE_USER_POST,
    GET_USERS_POSTS,
} from '../actions/actionTypes';
import { defaultAvatar } from '../constants';

const defaultStatus = { request: false, success: false, failure: false };

export const usersInitialState = {
    users: [],
    user: {
        _id: null,
        username: null,
        posts: [],
        greeting() {
            return `Hi, me name is ${this.username}. Welcome to my page!`;
        },
        description: 'Hi, i\'am new here. Don\'t mock me, please',
        status: 'The sun no longer shines to me, it shines to another =)',
        avatarUrl: defaultAvatar,
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
        greeting() {
            return `Hi, me name is ${this.username}. Welcome to my page!`;
        },
        description: 'Hi, i\'am new here. Don\'t mock me, please',
        status: 'The sun no longer shines to me, it shines to another =)',
        avatarUrl: defaultAvatar,
    },
    token: null,

    [`${SIGN_IN_USER}`]: defaultStatus,
    [`${SIGN_OUT_USER}`]: defaultStatus,
    [`${DELETE_USER_POST}`]: defaultStatus,
    [`${AUTO_SIGN_IN}`]: defaultStatus,
};

export const postsInitialState = {
    posts: [],
    [`${GET_USERS_POSTS}`]: defaultStatus,
};
