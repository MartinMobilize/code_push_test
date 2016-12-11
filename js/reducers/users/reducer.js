import * as types from './actionTypes';

const users = (state = {}, action = {}) => {
    switch (action.type) {
        case types.ADD_USERS: {
            return Object.assign({}, state, action.users.entities.users)
        }
        default: 
            return state;
    }
}

export default users;
