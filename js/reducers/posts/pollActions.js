import * as types from './actionTypes';
import FeedService from '../../services/FeedService';


export function changePoll(specificPoll, postId, specificId, index, optionPollId) {
    return (dispatch, getState) => {

        const prevAnswers = getState().posts[postId].specific.my_answer;

        let answers = []

        //The poll allows single selection
        if (specificPoll.poll_type == 'single') {

            answers = getNewSingleAnswer(answers, specificPoll, index);
        }
        else {
            answers = getNewMultipleAnswers(answers, specificPoll, index);
        }

        dispatch(requestPoll(answers, specificPoll, postId, index, optionPollId));

        FeedService.setPollSelection(specificId, answers).then((pollResponse) => {})
            .catch((error) =>{
                dispatch(requestPoll(prevAnswers, specificPoll, postId, index, optionPollId));
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
    answers = specificPoll.my_answer;

    const i = answers.indexOf(index);
    if (i != -1) {
        answers.splice(i, 1);
    }
    else {
        answers.push(index);
    }

    return answers;
}

export function requestPoll(answers, specificPoll, postId, index, optionPollId) {
    return {type: types.CHANGE_POLL, answers, specificPoll, postId, index, optionPollId}

}
