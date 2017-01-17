import * as types from './actionTypes';

export function addUsers(users) {
    return {type: types.ADD_USERS, users}
}

export function receiveUsers(users){
    return {type: types.RECEIVE_USERS, users}
}