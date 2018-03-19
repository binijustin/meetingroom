import * as actionTypes from './actionTypes';

export const getEvents = () => {
    return {
        type: actionTypes.GET_EVENTS
    }
}

export const getInvitations = () => {
    return {
        type: actionTypes.GET_INVITATIONS
    }
}

export const acceptInvite = () => {
    return {
        type: actionTypes.POST_ACCEPT_INVITE
    }
}

export const cancelInvite = () => {
    return {
        type: actionTypes.POST_CANCEL_INVITE
    }
}