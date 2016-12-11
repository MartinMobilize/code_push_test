import * as types from './actionTypes';
import * as groupTypes from '../groups/actionTypes'

const groupMembers = (state ={}, action = {}) => {
    switch (action.type) {
        case groupTypes.RECEIVE_GROUP_START:
        case types.ADD_MEMBERS: {
            return Object.assign({}, state, action.members.entities.groupMembers)
        }
        default: 
            return state;
    }
}

export default groupMembers;
