import { GET_USERS, GET_USER, SIGN_UP_USER, SIGN_IN_USER } from './actionTypes';
import { getAllUsersPath, signInPath, signUpPath, getUserPath, POST } from '../constants';

export const getUsers = () => ({ type: `${GET_USERS}`, url: getAllUsersPath } );
export const getUser = id => ({ type: `${GET_USER}`, url: `${getUserPath}${id}` });
