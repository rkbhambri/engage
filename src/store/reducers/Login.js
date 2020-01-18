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
        adminDetails: {},
        authRedirectPath: '/admin',
        otp: ''
    });
};

const setRedirectPath = (state, action) => {
    return updateObject(state, {
        authRedirectPath: action.path
    });
};



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action);
        case actionTypes.AUTH_FAIL:
            return authFail(state, action);
        case actionTypes.AUTH_LOGOUT:
            return authLogout(state, action);
        case actionTypes.SET_REDIRECT_PATH:
            return setRedirectPath(state, action);
        default:
            return state;
    }
};

export default reducer;
