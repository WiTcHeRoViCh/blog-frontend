export const getAllUsersPath = 'http://localhost:3002/users';
export const getUserPath = 'http://localhost:3002/users/';
export const signInPath = 'http://localhost:3002/users/sign_in';
export const signUpPath = 'http://localhost:3002/users/sign_up';
export const signOutPath = 'http://localhost:3002/users/sign_out';
export const getUserPostsPath = userId => `http://localhost:3002/users/${userId}/posts`;

export const POST = 'POST';
export const DELETE = 'DELETE';