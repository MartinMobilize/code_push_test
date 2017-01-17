// @flow

import * as groupTypes from './actionTypes'
import * as postsTypes from '../posts/actionTypes'
import * as groupMemberActionTypes from '../groupMembers/actionTypes'

const group = (state ={
    isFetching: false,
    didInvalidate: false,
    loadingMorePosts: false,
    loaded: false,
    members: [],
    posts: []
}, action = {}) => {
    switch (action.type) {
        case groupTypes.INVALIDATE_GROUP:
            return Object.assign({}, state, {
                didInvalidate: true
            })
        case groupTypes.REQUEST_GROUP_START:
        case groupTypes.REQUEST_GROUP:
            return Object.assign({}, state, {
                    isFetching: true,
                    didInvalidate: false
                })

        case groupTypes.INIT_GROUP:{
            return Object.assign({}, state, {
                    isFetching: false,
                    loaded: true,
                    didInvalidate: false}, action.group, {
                        members:  [...new Set(state.members.concat(action.members.result))],
                        posts: [...new Set(state.posts.concat(action.posts.result))]
                    })
        }

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

        case postsTypes.REQUEST_POSTS: {
            return Object.assign({}, state, {
                loadingMorePosts: true
            })
        }
        
        case postsTypes.ADD_POSTS: {
            return Object.assign({}, state, {
                posts: [...new Set(state.posts.concat(action.posts.result))],
                loadingMorePosts: false
            })
        }
        default: 
            return state;
    }
}

export default group;