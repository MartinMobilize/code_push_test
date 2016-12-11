import * as types from './actionTypes';
import GroupService from '../../services/GroupService'

export function addGroupMembers(groupId, members) {
    return {type: types.ADD_MEMBERS, groupId, members}
}