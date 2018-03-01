import { GET_USERS, GET_USER } from './actionTypes';
import { getAllUsersPath, getUserPath } from '../constants';

export const getUsers = () => ({ type: `${GET_USERS}`, url: getAllUsersPath } );
export const getUser = id => ({ type: `${GET_USER}`, url: `${getUserPath}${id}` });
