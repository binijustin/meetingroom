import * as actionTypes from './actionTypes';
// import unauth from '../../axios/unauth';
// import forauth from '../../axios/forauth';
// import axios from 'axios';
import http from '../../axios/unauth';
import Cookies from 'universal-cookie';

export const authStart = (username) => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error

    }
}



export const login = (obj) => {
    const cookies = new Cookies();
    cookies.set('_101',
        JSON.stringify({
            username: obj.username,
            firstname: obj.firstname,
            lastname: obj.lastname,
            middlename: obj.middlename,
            mobileno: obj.mobileno,
            userId: obj.userId,
            emplId: obj.emplId,
            emailaddress: obj.emailaddress,
            userrole: obj.userrole,
            usertype: obj.usertype,
            token: obj.token,
        })
        , { path: '/' });

    return {
        type: actionTypes.AUTH_LOGIN,
        firstname: obj.firstname,
        lastname: obj.lastname,
        middlename: obj.middlename,
        mobileno: obj.mobileno,
        userId: obj.userId,
        emplId: obj.emplId,
        emailaddress: obj.emailaddress,
        userrole: obj.userrole,
        usertype: obj.usertype
    }
}

export const loginCookies = (obj,tkn) => {
    return {
        type: actionTypes.AUTH_LOGIN_COOKIES,
        firstname: obj.firstname,
        lastname: obj.lastname,
        middlename: obj.middlename,
        mobileno: obj.mobileno,
        userId: obj.userId,
        emplId: obj.emplId,
        emailaddress: obj.emailaddress,
        userrole: obj.userrole,
        usertype: obj.usertype,
        token: tkn
    }
}


export const loginUser = (un, pass) => { //simulate async calls
    return dispatch => {


        const request = http('');
        dispatch(authStart(un));
        let details = {};
        request.post('access/LoginUser', {
            loginname: un,
            password: pass,
            syscode: "MRS"
        })
            .then(response => {
                const request = http(response.data.stringParam1);
                details = response.data.objParam1;
                if (response.data.status === 'SUCCESS') {
                    return request.get('authenticate/start')
                }
                else if (response.data.status === 'FAILURE') {
                    dispatch(authFail({ message: response.data.message }));
                }
            })
            .then(response => {
                if(response) {
                    dispatch(login(details))
                    const cookies = new Cookies();
                    cookies.set('tkn', response.headers.token, { path: '/' });
                    dispatch(authSuccess(response.headers.token))
                }
            })
            .catch(error => {
                console.log('error', error)
                dispatch(authFail(error));
            });
    }

}



export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}