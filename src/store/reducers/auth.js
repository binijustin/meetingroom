import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import Cookies from 'universal-cookie';

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
    loading: false,
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.AUTH_START: return updateObject(state, {
            loading: true
        });

        case actionTypes.AUTH_SUCCESS: return updateObject(state, {
            token: action.token,
            loading: false
        });


        case actionTypes.AUTH_FAIL: return updateObject(state, {
            error: action.error,
            loading: false
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

        case actionTypes.AUTH_LOGIN_COOKIES: return updateObject(state, {
            username: action.username,
            firstname: action.firstname,
            lastname: action.lastname,
            middlename: action.middlename,
            mobileno: action.mobileno,
            userId: action.userId,
            emplId: action.emplId,
            emailaddress: action.emailaddress,
            userrole: action.userrole,
            usertype: action.usertype,
            token: action.token
        });

        case actionTypes.AUTH_LOGOUT:
        const cookies = new Cookies();
        cookies.remove('tkn')
        cookies.remove('_101')
        return updateObject(state, {
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
            loading: false,
        })

        default: {
            return state;
        }
    }

    // return state;
}

export default reducer;