import * as types from './actionTypes';
import * as groupTypes from '../groups/actionTypes'

const users = (state = {}, action = {}) => {
    switch (action.type) {
        case groupTypes.RECEIVE_GROUP_START:
        case types.ADD_USERS: {
            return Object.assign({}, state, action.users.entities.users)
        }
        default: 
            return state;
    }
}

export default users;
