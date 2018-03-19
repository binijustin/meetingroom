import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
const initialState = {
    userInvitations: [],
    userInvites: [],
    userEvents: [],
}

//create the logic manipulation here
const filteredEvents = (state, action) => {
    const updatedArray = state.userEvents.filter(result => {
        //logic for filtering
        return true
    })
    
    return updateObject(state, {userEvents : updatedArray})
}

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.GET_EVENTS) {
        return filteredEvents(state, action)
    }
    return state;
}

export default reducer;