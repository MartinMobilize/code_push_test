import * as types from './actionTypes';
import GroupService from '../../services/GroupService'
import { groupStart, group, groupMember, user, post } from '../../schema'
import * as postActions from '../posts/actions'
import * as userActions from '../users/actions'
import * as memberActions from '../groupMembers/actions'
import {batchActions} from 'redux-batched-actions';


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
        

            dispatch(batchActions([
                        postActions.initPosts(posts),
                        userActions.receiveUsers(users),
                        memberActions.addGroupMembers(groupId,members),
                        initGroup(groupId,groupStartResponse.group,members,posts)
                    ]));
        })
    }
}

function initGroup(groupId, group, members, posts){
    return{type: types.INIT_GROUP, groupId,group,members,posts}
}