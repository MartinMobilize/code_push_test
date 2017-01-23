// @flow
import * as types from './actionTypes';

const event = (state = {}, action = {}) => {

    switch (action.type) {

        case types.CHANGE_EVENT:

            return Object.assign({}, state, {
                viewed: true,
                specific: Object.assign({}, state.specific, {
                    rsvp: action.answer
                })
            });

            break;

        default:
            return state;
    }
};

export default event;
