import * as actionTypes from './actionTypes';
// import unauth from '../../axios/unauth';
// import forauth from '../../axios/forauth';
// import axios from 'axios';
import http from '../../axios/unauth';


export const authStart = (username) => {
    return {
        type: actionTypes.AUTH_START,
        username: username
    }
}

export const authSucces = (token) => {
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
    console.log(obj)
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

export const loginUser = (un, pass) => { //simulate async calls
    return dispatch => {
        const request = http('');
        dispatch(authStart(un))
        request.post('access/LoginUser', {

            loginname: un,
            password: pass,
            syscode: "MRS"
        })
            .then(response => {
                const request = http(response.data.stringParam1);
                console.log(response)
                const details = response.data.objParam1;
                if (response.data.status === 'SUCCESS') {
                    dispatch(login(details))
                    return request.get('authenticate/start')
                        .then(response => {
                            console.log('verify', response);
                            dispatch(authSucces(response.headers.token))
                        });
                }
                else if (response.data.status === 'FAILURE') {
                    dispatch(authFail({ message: response.data.message }));
                }
            })
            .catch(error => {
                console.log('error', error)
                dispatch(authFail(error));
            });
    }
}