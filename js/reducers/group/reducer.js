import * as types from './actionTypes';

const groups = (state =[], action = {}) => {
    switch (action.type) {
        case types.SET_GROUPS: {
        }
        default: 
            return state;
    }
}

export default groups;