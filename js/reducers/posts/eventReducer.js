// @flow
import * as types from './actionTypes';

const event = (state = {}, action = {}) => {

    switch (action.type) {

        case types.CHANGE_EVENT:

            return Object.assign({}, state, {
                viewed: true
            })

        default:
            return state;
    }
};

export default event;
