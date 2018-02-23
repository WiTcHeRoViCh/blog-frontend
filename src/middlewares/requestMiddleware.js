import axios from 'axios';
import { REQUEST, SUCCESS, FAILURE } from '../actions/actionTypes';

export const requestMiddleware = ({ dispatch, getState }) => next => action => {
    if (action.hasOwnProperty('url')){
        const { url, method='GET', type, data=null} = action;

        axios({ url, method, data }).then( res => {
            console.log(res);
            if (res.data.hasOwnProperty('success')){
                return next({ type: `${type}_${FAILURE}` });
            } else {
                return next({ type: `${type}_${SUCCESS}`, serverResponse: res });
            }
        }).catch( err => {
            return next({ type: `${type}_${FAILURE}` });
        });

        return next({...action, type: `${type}_${REQUEST}`});
    }

    return next(action);
};
