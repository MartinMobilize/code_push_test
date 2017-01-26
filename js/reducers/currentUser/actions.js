import { normalize } from 'normalizr';
import {batchActions} from 'redux-batched-actions';
import * as types from './actionTypes';
import { setGroups, fetchGroupStart } from '../groups/actions'
import { setNetwork } from '../network/actions'
import {setCurrentGroup} from '../currentGroup/actions'
import UserNetworksService from '../../services/UserNetworksService'
import { network } from '../../schema'


export function fetchUserState() {
    return (dispatch, getState) => {
        UserNetworksService.getLastVisitedNetwork().then((networkRespose) => {
            const normNetworks = normalize(networkRespose, network);

            dispatch(batchActions([
                setUserState(networkRespose.user_organization),
                setGroups(normNetworks.entities.groups),
                setNetwork(networkRespose),
                setCurrentGroup(networkRespose.groups[0].id),
                fetchGroupStart(networkRespose.groups[0].id)
            ]))
        })
    }
};
export function setUserState(userOrg){
    return ({type: types.SET_USER_STATE, user: userOrg});
}