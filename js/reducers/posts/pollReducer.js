import * as types from './actionTypes';
import * as groupTypes from '../groups/actionTypes'

const poll = (state = {}, action = {}) => {
    switch (action.type) {
        case types.CHANGE_POLL:
            return Object.assign({}, state, {
                    specific: Object.assign({}, state.specific, {
                        my_answer: Object.assign({}, state.specific.my_answer, {

                        })
                    }),
                });
        default: 
            return state;
    }
}

export default poll;
