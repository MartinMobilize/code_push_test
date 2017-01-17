// @flow

import * as types from './actionTypes';
import * as groupTypes from '../groups/actionTypes'
import FeedService from '../../services/FeedService';

const poll = (state = {}, action = {}) => {
    switch (action.type) {

        case types.CHANGE_POLL_MULTIPLE:

            return Object.assign({}, state, {
                    specific: Object.assign({}, state.specific, {
                        my_answer: action.answers})
                    })

        case types.CHANGE_POLL_SINGLE:

            return Object.assign({}, state, {
                specific: Object.assign({}, state.specific, {
                    my_answer: action.answers})
            })

        default: 
            return state;
    }
}

export default poll;
