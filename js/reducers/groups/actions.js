import * as types from './actionTypes';
import GroupService from '../../services/GroupService'

export function setGroups(groups) {
    return {type: types.SET_GROUPS, groups}
};

export function fetchGroupStart(groupId) {
    return (dispatch, getState) => {
        dispatch({type: types.REQUEST_GROUP});
        GroupService.onEnter(groupId).then((groupRespose) => {
            dispatch({type: types.RECEIVE_GROUP, group: groupRespose});
        })
    }
}
// export function fetchGroup()
// { type: 'FETCH_POSTS' }
// { type: 'FETCH_POSTS', status: 'error', error: 'Oops' }
// { type: 'FETCH_POSTS', status: 'success', response: { ... } }

// export function group