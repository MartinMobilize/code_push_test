import * as types from './actionTypes';

export function addUsers(users) {
    return {type: types.ADD_USERS, users}
}