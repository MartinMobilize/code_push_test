import * as types from './actionTypes';

export function setCurrentGroup(groupId){
    return({type: types.SET_CURRENT_GROUP, groupId});
};