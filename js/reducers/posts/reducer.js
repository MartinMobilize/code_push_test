import * as types from './actionTypes';
import * as groupTypes from '../groups/actionTypes'
import poll from './pollReducer'

const posts = (state = {}, action = {}) => {
    switch (action.type) {
        case types.REQUEST_POSTS: {
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        } 
        case types.RECEIVE_POSTS: {
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                selectedPoll:0,
                items: action.posts.entities.posts,
            })
        }
        case types.ADD_POSTS: 
        case types.CHANGE_POLL_SINGLE:
        case types.CHANGE_POLL_MULTIPLE:
                return Object.assign({}, state, {
            [action.postId]: poll(state[action.postId], action)
              })

        case groupTypes.RECEIVE_GROUP_START: {
                        const polls = {};
            Object.keys(action.posts.entities.posts).forEach(postID =>

                polls[postID] = Object.assign({},    
                poll(undefined,action),
                action.posts.entities.posts[postID]));

            return Object.assign({}, state, polls)

            //return Object.assign({}, state, action.posts.entities.posts)
        }
        default: 
            return state;
    }
}

export default posts;
