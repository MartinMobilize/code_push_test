import * as types from './actionTypes';
import { setGroups } from '../groups/actions'
import { setNetwork } from '../network/actions'
import UserNetworksService from '../../services/UserNetworksService'

export function fetchUserState() {
    return (dispatch, getState) => {
        console.log('fetchUserState');
        UserNetworksService.getLastVisitedNetwork().then((network) => {
            dispatch({type: types.SET_USER_STATE, user: network.user_organization});
            dispatch(setGroups(network.groups));
            dispatch(setNetwork(network));
        })
    }
};