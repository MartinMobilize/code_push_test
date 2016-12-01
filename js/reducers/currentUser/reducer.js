import * as types from './actionTypes';

const currentUser = (state ={}, action = {}) => {
    switch (action.type) {
        case types.SET_USER_STATE: {
            return action.user;
        }
        default: 
            return state;
    }
}

export default currentUser;