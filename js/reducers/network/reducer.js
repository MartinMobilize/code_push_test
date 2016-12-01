import * as types from './actionTypes';

const network = (state = {}, action = {}) => {
    switch (action.type) {
        case types.SET_NETWORK: {
            return action.network;
        }
        default: 
            return state;
    }
}

export default network;