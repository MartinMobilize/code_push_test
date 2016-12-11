import * as types from './actionTypes';
import FeedService from '../../services/FeedService';

export function fetchPosts(receiverType, receiverId,offset, count) {
    return (dispatch, getState) => {
        dispatch({type: types.REQUEST_POSTS, receiverType, receiverId});
        
        FeedService.getPosts(receiverType, receiverId, offset, count).then((posts) => {
            dispatch({type: types.RECEIVE_POSTS, receiverType, receiverId, posts});
        })
    }
};

export function addPosts(receiverType, receiverId, posts) {
    return {type: types.ADD_POSTS, receiverType, receiverId, posts}
}