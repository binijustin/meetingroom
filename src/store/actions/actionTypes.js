//Auth
export const AUTH_START = 'AUTH_START';


//MeetingRoom
export const GET_EVENTS = 'GET_USER_EVENTS';
export const GET_INVITATIONS = 'GET_USER_INVITATIONS';
export const POST_ACCEPT_INVITE = 'POST_ACCEPT_INVITE';
export const POST_CANCEL_INVITE = 'POST_CANCEL_INVITE';

export const authenticate = (un, pass) => {
    return {
        type: AUTH_START,
        userName: un,
        password: pass
    }
}

export const authStart = (un, pass) => { //simulate async calls
    return dispatch => {
        setTimeout(() => {
            dispatch(authenticate(un, pass));
        }, 2000);
    }
}

export const getEvents = () => {
    return {
        type: GET_EVENTS
    }
}

export const getInvitations = () => {
    return {
        type: GET_INVITATIONS
    }
}

export const acceptInvite = () => {
    return {
        type: POST_ACCEPT_INVITE
    }
}

export const cancelInvite = () => {
    return {
        type: POST_CANCEL_INVITE
    }
}