import { GET_USERS, GET_USER, SIGN_UP_USER, SIGN_IN_USER } from './actionTypes';
import { getAllUsersPath, signInPath, signUpPath, getUserPath, POST } from '../constants';

export const getUsers = () => ({ type: `${GET_USERS}`, url: getAllUsersPath } );
export const getUser = id => ({ type: `${GET_USER}`, url: `${getUserPath}${id}` });
export const singUpUser = data => ({ type: `${SIGN_UP_USER}`, url: signUpPath, method: POST, data });
export const signInUser = data => ({ type: `${SIGN_IN_USER}`, url: signInPath, method: POST, data });