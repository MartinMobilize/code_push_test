import * as types from './actionTypes';

const groupMembers = (state ={}, action = {}) => {
    switch (action.type) {
        case types.ADD_MEMBERS: {
            return Object.assign({}, state, action.members.entities.groupMembers)
        }
        default: 
            return state;
    }
}

export default groupMembers;
