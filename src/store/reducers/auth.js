import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
const initialState = {
    userInfo: {
        username: null,
        firstname: null,
        lastname: null,
        middlename: null,
        mobileno: null,
        userId: null,
        emplId: null,
        emailaddress: null,
        userrole: null,
        usertype: null
    },
    error:null,
    authenticated: false,
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.AUTH_START: return updateObject(state, {

        });

        case actionTypes.AUTH_FAIL: return updateObject(state, {
            error:action.error
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