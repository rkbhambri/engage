/*
 * This file contains store (accessible to all components) which get manipulated based on dispatched actions for Authentication
 */
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    token: null,
    userId: null,
    error: null,
    adminDetails: {},
    authRedirectPath: '/admin',
    otp: '',
    requestToSetPassword: '',
    userDetails: {},
    isPasswordSetSuccessfully: false,
    isLoading: false
};

const authSuccess = (state, action) => {
    return updateObject(state, {
        adminDetails: action.adminDetails,
        token: action.adminDetails.token,
        userId: action.adminDetails.id,
        authRedirectPath: '/'
    });
};

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error
    });
};

const authLogout = (state, action) => {
    return updateObject(state, {
        token: null,
        userId: null,
        error: null,
        adminDetails: {},
        authRedirectPath: '/onboard',
        otp: '',
        requestToSetPassword: '',
        userDetails: {},
        isPasswordSetSuccessfully: false,
        isLoading: false
    });
};

const updateLoadingStatus = (state, action) => {
    return updateObject(state, {
        isLoading: action.status
    });
};

const setRedirectPath = (state, action) => {
    return updateObject(state, {
        authRedirectPath: action.path
    });
};

const setOtp = (state, action) => {
    return updateObject(state, {
        otp: action.otp
    });
};

const emptyToken = (state, action) => {
    return updateObject(state, {
        token: null
    });
};

const setRequestToSetPasswordId = (state, action) => {
    return updateObject(state, {
        requestToSetPassword: action.requestToSetPassword
    });
};

const updateSetPasswordStatus = (state, action) => {
    return updateObject(state, {
        isPasswordSetSuccessfully: action.status
    });
};

const Auth = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action);
        case actionTypes.AUTH_FAIL:
            return authFail(state, action);
        case actionTypes.AUTH_LOGOUT:
            return authLogout(state, action);
        case actionTypes.UPDATE_LOADING_STATUS:
            return updateLoadingStatus(state, action);
        case actionTypes.SET_REDIRECT_PATH:
            return setRedirectPath(state, action);
        case actionTypes.SET_OTP:
            return setOtp(state, action);
        case actionTypes.EMPTY_TOKEN:
            return emptyToken(state, action);
        case actionTypes.SET_REQUEST_TO_SET_PASSWORD_ID:
            return setRequestToSetPasswordId(state, action);
        case actionTypes.UPDATE_SET_PASSWORD_STATUS:
            return updateSetPasswordStatus(state, action);
        default:
            return state;
    }
};

export default Auth;
