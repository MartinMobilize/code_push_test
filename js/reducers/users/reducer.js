import * as types from './actionTypes';

const users = (state = {}, action = {}) => {
    switch (action.type) {
        case types.RECEIVE_USERS:
        case types.ADD_USERS: {
            return Object.assign({}, state, action.users.entities.users)
        }
        default: 
            return state;
    }
}

export default users;
