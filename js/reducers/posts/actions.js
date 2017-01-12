import * as types from './actionTypes';
import * as groupActions from '../groups/actions';
import * as userActions from '../users/actions';
import FeedService from '../../services/FeedService';
import {normalize, arrayOf} from 'normalizr';
import {user, post} from '../../schema'
import {batchActions} from 'redux-batched-actions';

export function fetchPosts(receiverType, receiverId, offset, count) {
    return (dispatch, getState) => {
        // dispatch(requestPosts(receiverType, receiverId));
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

export function receivePosts(receiverType, receiverId, posts) {
    return {type: types.ADD_POSTS, receiverType, receiverId, posts}
}

export function changePoll(specificPoll, postId, specificId, index, optionPollId) {
    return (dispatch, getState) => {

        var answers = []

        //The poll allows single selection
        if (specificPoll.poll_type == 'single') {

            answers = getNewSingleAnswer(answers, specificPoll, index);

            dispatch(requestPollSingle(answers, specificPoll, postId, index, optionPollId));
        }
        else {
            answers = getNewMultipleAnswers(answers, specificPoll, index);

            dispatch(requestPostMultiple(answers, specificPoll, postId, index, optionPollId));
        }
        FeedService.setPollSelection(specificId, answers).then((pollResponse) => {
            const respo = pollResponse;
        });
    }
}

function getNewSingleAnswer(answers, specificPoll, index) {

    if (specificPoll.my_answer.indexOf(index) == -1) {
        answers.push(index);
    }

    return answers;

}
function getNewMultipleAnswers(answers, specificPoll, index) {
    answers = action.specificPoll.my_answer.slice();

    const i = answers.indexOf(index);
    if (index != -1) {
        answers.splice(i, 1);
    }
    else {
        answers.push(index);
    }

    return answers;
}

export function requestPollAnswer(specificPoll, postId, index, optionPollId) {
    return {type: types.CHANGE_POLL, specificPoll, postId, index, optionPollId}

}
export function requestPollSingle(answers, specificPoll, postId, index, optionPollId) {
    return {type: types.CHANGE_POLL_SINGLE, answers, specificPoll, postId, index, optionPollId}

}
export function requestPostMultiple(specificPoll, postId, index, optionPollId) {
    return {type: types.CHANGE_POLL_MULTIPLE, specificPoll, postId, index, optionPollId}

}