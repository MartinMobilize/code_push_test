import * as types from './actionTypes';
import GroupService from '../../services/GroupService'
import { groupStart, group, groupMember, user, post } from '../../schema'
import { addGroupMembers } from '../groupMembers/actions'
import { addPosts } from '../posts/actions'
import { addUsers } from '../users/actions'

import { normalize, arrayOf } from 'normalizr';
export function setGroups(groups) {
    return {type: types.SET_GROUPS, groups}
};

export function fetchGroupStart(groupId) {
    return (dispatch, getState) => {
        dispatch({type: types.REQUEST_GROUP_START, groupId});

        GroupService.onEnter(groupId).then((groupStartResponse) => {
            // const groupStartNorm = normalize(groupStartResponse, groupStart);
            const members = normalize(groupStartResponse.members, arrayOf(groupMember));
            const posts = normalize(groupStartResponse.feed.posts, arrayOf(post));
            const users = normalize(groupStartResponse.feed.users, arrayOf(user));
        
            dispatch({type: types.RECEIVE_GROUP_START,
                 groupId,
                 group: groupStartResponse.group,
                 members,
                 posts,
                 users
                });
        })
    }
}