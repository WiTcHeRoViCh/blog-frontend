import axios from 'axios/index'
import { REQUEST, SUCCESS, FAILURE } from '../actions/actionTypes';

export const requestMiddleware = ({ dispatch, getState }) => next => action => {
    if (action.hasOwnProperty('url')){
        const { url, method='GET', type} = action;

        axios({ url, method}).then( res => {
            return next({ type: `${type}_${SUCCESS}`, serverResponse: res });
        }).catch( () => {
            return next({ type: `${type}_${FAILURE}` });
        });

        return next({...action, type: `${type}_${REQUEST}`});
    }

    return next(action);
};
