import { normalize } from 'normalizr';
import * as types from './actionTypes';
import { setGroups, fetchGroupStart } from '../groups/actions'
import { setNetwork } from '../network/actions'
import {setCurrentGroup} from '../currentGroup/actions'
import UserNetworksService from '../../services/UserNetworksService'
import { network } from '../../schema'
import {batchActions} from 'redux-batched-actions';

export function fetchUserState() {
    return (dispatch, getState) => {
        UserNetworksService.getLastVisitedNetwork().then((networkRespose) => {
            const normNetworks = normalize(networkRespose, network);

            dispatch({type: types.SET_USER_STATE, user: networkRespose.user_organization});
            dispatch(setGroups(normNetworks.entities.groups));
            dispatch(setNetwork(networkRespose));
            dispatch(setCurrentGroup(networkRespose.groups[0].id));
            dispatch(fetchGroupStart(networkRespose.groups[0].id));
        })
    }
};