import { GET_USER_WITH_POSTS, ADD_USER_POSTS, DELETE_USER_POST, EDIT_USER_POST } from './actionTypes';
import { DELETE, POST, PATCH } from '../constants';
import { getUserWitchPostsPath, deleteUserPostPath, addUserPostPath, editUserPostPath } from '../helperFunctions';

export const getUserWithPosts = userId => ({ type: `${GET_USER_WITH_POSTS}`, url: getUserWitchPostsPath(userId) });
export const addUserPost = (userId, data) => ({ type: `${ADD_USER_POSTS}`, url: addUserPostPath(userId), data, method: POST });
export const deleteUserPost = (userId, postId) => ({ type: `${DELETE_USER_POST}`, url: deleteUserPostPath(userId, postId), method: DELETE });
export const editUserPost = (userId, postId, data) => ({ type: `${EDIT_USER_POST}`, url: editUserPostPath(userId, postId), data, method: PATCH });
