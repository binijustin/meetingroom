import * as actionTypes from './actionTypes';
import unauth from '../../axios/unauth';
import forauth from '../../axios/forauth';
import axios from 'axios';


export const authSucces = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
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
        username: obj.username,
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
        console.log(un, pass);
        unauth.post('access/LoginUser', {

            loginname: un,
            password: pass,
            syscode: "MRS"
        })
            .then(response => {
                console.log(response);
                const details = response.data.objParam1;
                // dispatch(login(details));
                localStorage.setItem('stringParam', response.data.stringParam1)
                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + response.data.stringParam1
                }
                // return unauth.get('authenticate/start', {
                //     headers: headers
                // });
                 return forauth.get('authenticate/start');
            })
            .then(response => {
                console.log('verify', response);
            })
            .catch(error => {
                console.log(error)
                dispatch(authFail(error));
            });
    }
}