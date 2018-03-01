import { POST, DELETE, signInPath, signUpPath, signOutPath, getCurrentUserPath } from '../constants';
import { SIGN_IN_USER, SIGN_UP_USER, SIGN_OUT_USER } from './actionTypes';

export const singUpUser = data => ({ type: `${SIGN_UP_USER}`, url: signUpPath, method: POST, data });
export const signInUser = data => ({ type: `${SIGN_IN_USER}`, url: signInPath, method: POST, data });
export const signOutUser = () => ({ type: `${SIGN_OUT_USER}`, url: signOutPath, method: DELETE });
export const getCurrentUser = () => ({ type: `${SIGN_IN_USER}`, url: getCurrentUserPath });
