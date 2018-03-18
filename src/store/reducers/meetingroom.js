import * as actionTypes from '../actions/actionTypes';

const initialState = {
    userInvitations: [],
    userInvites: [],
    userEvents: [],
}

const reducer = (state = initialState, action) => {

    
    if (action.type === actionTypes.GET_EVENTS) {
        //Api call
        console.log(action);
        return {
            ...initialState,
            username: action.userName,
            fullname: action.fullName
        }
        
    }

    if (action.type === actionTypes.GET_EVENTS) {
        //Api call
        console.log(action);
        return {
            ...initialState,
            username: action.userName,
            fullname: action.fullName
        }
        
    }

    return state;
}

export default reducer;