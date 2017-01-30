import * as types from './actionTypes';
import * as userActions from '../users/actions';
import FeedService from '../../services/FeedService';
import {normalize, arrayOf} from 'normalizr';
import {user, post} from '../../schema'
import {changePoll} from './pollActions'
import {changeEvent} from './eventActions'
import {batchActions} from 'redux-batched-actions';

export function fetchPosts(receiverType, receiverId, offset, count) {
    return (dispatch, getState) => {
         dispatch(requestPosts(receiverType, receiverId));
        FeedService.getPosts(receiverType, receiverId, offset, count).then((postsRespose) => {
            const posts = normalize(postsRespose.posts, arrayOf(post));
            const users = normalize(postsRespose.users, arrayOf(user));

            dispatch(batchActions([
                userActions.addUsers(users),
                receivePosts(receiverType, receiverId, posts)
            ]));
        })
    }
};

export function requestPosts(receiverType, receiverId) {
    return {type: types.REQUEST_POSTS, receiverType, receiverId}
}

export function initPosts(posts){
    return {type: types.INIT_POSTS, posts}
}

export function receivePosts(receiverType, receiverId, posts) {
    return {type: types.ADD_POSTS, receiverType, receiverId, posts}
}

