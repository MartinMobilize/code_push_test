import * as types from './actionTypes';
import FeedService from '../../services/FeedService';

export function changeEvent(id, eventId, answer){
    return (dispatch, getState) => {

        const prevAnswer = getState().posts[id].specific.rsvp;

        dispatch(dispatchEvent(id, eventId, answer));

        FeedService.setEventSelection(eventId, answer)
            .then((eventResponse) => {})
            .catch((error) =>{ dispatch(dispatchEvent(id, eventId, prevAnswer))});
    }

}

export function dispatchEvent(id, eventId, answer){
    return {type:types.CHANGE_EVENT,id, eventId, answer};
}

