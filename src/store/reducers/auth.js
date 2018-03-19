import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
const initialState = {
    username: null,
    firstname: null,
    lastname: null,
    middlename: null,
    mobileno: null,
    userId: null,
    emplId: null,
    emailaddress: null,
    userrole: null,
    usertype: null,
    error: null,
    token: null,
    loading:false,
    authRedirectPath: '/home'
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.AUTH_START: return updateObject(state, {
            loading:true,
            username:action.username
        });

        case actionTypes.AUTH_SUCCESS: return updateObject(state, {
            token:action.token,
            loading:false
        });


        case actionTypes.AUTH_FAIL: return updateObject(state, {
            error: action.error,
            loading:false
        });


        case actionTypes.AUTH_LOGIN: return updateObject(state, {
            username: action.username,
            firstname: action.firstname,
            lastname: action.lastname,
            middlename: action.middlename,
            mobileno: action.mobileno,
            userId: action.userId,
            emplId: action.emplId,
            emailaddress: action.emailaddress,
            userrole: action.userrole,
            usertype: action.usertype
        });

        default: {
            return state;
        }
    }

    // return state;
}

export default reducer;