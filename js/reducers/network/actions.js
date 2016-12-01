import * as types from './actionTypes';

export function setNetwork(network) {
    return {type: types.SET_NETWORK, network}
};