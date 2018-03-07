export const getAllUsersPath = 'http://localhost:3002/users';
export const getUserPath = 'http://localhost:3002/users/';
export const getCurrentUserPath = 'http://localhost:3002/users/me';

export const getUsersPostsPath = 'http://localhost:3002/users/posts';

export const signInPath = 'http://localhost:3002/users/sign_in';
export const signUpPath = 'http://localhost:3002/users/sign_up';
export const signOutPath = 'http://localhost:3002/users/sign_out';
export const autoSignInPath = 'http://localhost:3002/users/auto_sign_in';

export const POST = 'POST';
export const DELETE = 'DELETE';
export const PATCH = 'PATCH';

export const styles = {
    submitButton: {
        verticalAlign: 'middle',
        marginTop: 15,
    },
    submitInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
    },

    headerElemetsStyles: {
        marginRight: 20,
        marginLeft: 0,
        marginTop: 0,
        display: 'flex',
        alignItems: 'center',
        width: 200,
    },

    textFieldStyles: {
        color: 'rgba(0, 0, 0, 0.7)',
    },
};

export const defaultAvatar = 'http://localhost:8080/src/images/defaultAvatar.png';
