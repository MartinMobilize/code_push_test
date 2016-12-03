import * as types from './actionTypes';
import { setGroups } from '../groups/actions'
import { setNetwork } from '../network/actions'
import UserNetworksService from '../../services/UserNetworksService'
import { network } from '../../schema'
import { normalize } from 'normalizr';

export function fetchUserState() {
    return (dispatch, getState) => {
        UserNetworksService.getLastVisitedNetwork().then((networkRespose) => {
            normNetworks = normalize(networkRespose, network);

            dispatch({type: types.SET_USER_STATE, user: networkRespose.user_organization});
            dispatch(setGroups(normNetworks.entities.groups));
            dispatch(setNetwork(networkRespose));
        })
    }
};