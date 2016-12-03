import * as types from './actionTypes';
import FeedService from '../../services/FeedService';

export function fetchPosts(receiverType, receiverId,offset, count) {
    return (dispatch, getState) => {
        FeedService.getPosts(receiverType, receiverId, offset, count).then((posts) => {
            console.log("loading posts")
            dispatch({type: types.ADD_POSTS, posts});
        })
    }
};