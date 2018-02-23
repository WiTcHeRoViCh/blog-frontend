import { SET_USERS, SUCCESS } from "./actionTypes";

// export const setUsers = users => ({type: `${SET_USERS}_${SUCCESS}`, users});

export const setUsers = (url, method) => ({type: `${SET_USERS}`, url, method});