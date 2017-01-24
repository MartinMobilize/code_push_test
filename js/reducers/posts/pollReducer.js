// @flow

import * as types from './actionTypes';

const poll = (state = {}, action = {}) => {

    switch (action.type) {

        case types.CHANGE_POLL:

            return Object.assign({}, state, {
                viewed:true,
                specific: Object.assign({}, state.specific, {
                    my_answer: action.answers})
            })

        default: 
            return state;
    }
}

export default poll;
