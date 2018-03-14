import * as actionTyes from './actionTypes';

export const authStart = () => {
    return {
        type:actionTyes.AUTH_START
    };
};

export const authSuccess = (authData) => {
    return {
        type:actionTyes.AUTH_SUCCESS,
        authData:  authData
    };
};

export const authStart = (error) => {
    return {
        type:actionTyes.AUTH_FAIL,
        error:error
    };
};

export const auth = (email, pass) => {
    return dispatch => {
        dispath(authStart());
    }
}
