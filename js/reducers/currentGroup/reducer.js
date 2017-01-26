import * as types from './actionTypes';

const currentGroup = (state ={}, action = {}) => {
    switch (action.type) {
        case types.SET_CURRENT_GROUP: {
            return action.groupId;
        }
        default: 
            return state;
    }
}

export default currentGroup;