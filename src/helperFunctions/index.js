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