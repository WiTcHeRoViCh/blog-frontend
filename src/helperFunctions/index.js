export const status = {
    request: (type) => {
        const action = type.split(' ')[0];
        const newStatus = {[action]: {request: true, success: false, failure: false}};

        return newStatus;
    },
    success: (type) => {
        const action = type.split(' ')[0];
        const newStatus = {[action]: {request: false, success: true, failure: false}};

        return newStatus;
    },
    failure: (type) => {
        const action = type.split(' ')[0];
        const newStatus = {[action]: {request: false, success: false, failure: true}};

        return newStatus;
    }
};

export const getUserWitchPostsPath = userId => `http://localhost:3002/users/${userId}/posts`;
export const deleteUserPostPath = (userId, postId) => `http://localhost:3002/users/${userId}/posts/${postId}`;
export const addUserPostPath = userId => `http://localhost:3002/users/${userId}/posts`;
export const editUserPostPath = (userId, postId) => `http://localhost:3002/users/${userId}/posts/${postId}`;
