import * as types from './actionTypes';
import * as groupMemberActionTypes from '../groupMembers/actionTypes'
import * as postsTypes from '../posts/actionTypes'
import group from './groupReducer'

const groups = (state ={}, action = {}) => {
    switch (action.type) {
        case types.INVALIDATE_GROUP:
        case types.REQUEST_GROUP:
        case types.RECEIVE_GROUP:
        case groupMemberActionTypes.ADD_MEMBERS: {
            return Object.assign({}, state, {
                [action.groupId]: group(state[action.groupId], action)
            })
        }
        case postsTypes.ADD_POSTS: {
            if (action.receiverType == 'groups') { // can also be events
                return Object.assign({}, state, {
                    [action.receiverId]: group(state[action.receiverId], action)
                })
            }
        }
        case types.SET_GROUPS: {
            const groups = {};
            Object.keys(action.groups).forEach(groupId =>
                groups[groupId] = Object.assign({},
                group(undefined,action),
                action.groups[groupId]));
            return groups;
        }

        default: 
            return state;
    }
}

export default groups;
