import { GET_USER_POSTS } from './actionTypes';
import { getUserPostsPath } from '../constants';

export const getUserPosts = userId => ({ type: `${GET_USER_POSTS}`, url: getUserPostsPath(userId) });