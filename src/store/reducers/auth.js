import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    username: null,
    fullname: null,
    password: null,
}

const reducer = (state = initialState, action) => {

    if (action.type === actionTypes.AUTH_START) {
        //Api call
        console.log(action);
        return {
            ...initialState,
            username: action.userName,
            password: action.password
        }
        
    }

    return state;
}

export default reducer;