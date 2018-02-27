import axios from 'axios';
import { REQUEST, SUCCESS, FAILURE } from '../actions/actionTypes';

export const requestMiddleware = ({ dispatch, getState }) => next => action => {
    if (action.hasOwnProperty('url')){

        const token = getState().currentUserReducer.token || localStorage.getItem('token') || '';
        const { url, method = 'GET', type, data = null } = action;

        axios({ url, method, data, headers: { Authorization: token } }).then( res => {
            if (res.data.hasOwnProperty('success')){
                return next({ type: `${type}_${FAILURE}` });
            } else {
                return next({ type: `${type}_${SUCCESS}`, serverResponse: res });
            }
        }).catch( () => {
            return next({ type: `${type}_${FAILURE}` });
        });

        return next({...action, type: `${type}_${REQUEST}`});
    }

    return next(action);
};
