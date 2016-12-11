import * as types from './actionTypes';

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
                items: action.posts,
            })
        }
        case types.ADD_POSTS: {
            return Object.assign({}, state, action.posts.entities.posts)
        }
        default: 
            return state;
    }
}

export default posts;
