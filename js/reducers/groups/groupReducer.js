import * as groupTypes from './actionTypes'
import * as postsTypes from '../posts/actionTypes'
import * as groupMemberActionTypes from '../groupMembers/actionTypes'

const group = (state ={
    isFetching: false,
    didInvalidate: false,
    loaded: false,
    members: [],
    posts: []
}, action = {}) => {
    switch (action.type) {
        case groupTypes.INVALIDATE_GROUP:
            return Object.assign({}, state, {
                didInvalidate: true
            })
        case groupTypes.REQUEST_GROUP:
            return Object.assign({}, state, {
                    isFetching: true,
                    didInvalidate: false
                })
        case groupTypes.RECEIVE_GROUP: {
            return Object.assign({}, state, {
                    isFetching: false,
                    loaded: true,
                    didInvalidate: false}, action.group)
        }
        case groupMemberActionTypes.ADD_MEMBERS: {
            return Object.assign({}, state, {
                    members:  [...new Set(state.members.concat(action.members.result))]
                })            
        }
        case postsTypes.ADD_POSTS: {
            return Object.assign({}, state, {
                posts: [...new Set(state.posts.concat(action.posts.result))]
            })
        }
        default: 
            return state;
    }
}

export default group;