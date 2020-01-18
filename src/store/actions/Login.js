import * as actionTypes from './actionTypes';
import axios from '../../httpInstance/axios';
import { setItem, clearItems } from '../../helpers/cookie';

export const authSuccess = (response) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        superAdminDetails: response,
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    // Clear cookies on logout
    clearItems();
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const updateLoadingStatus = (status) => {
    return {
        type: actionTypes.UPDATE_LOADING_STATUS,
        status
    };
};

export const login = (email, password) => {
    return dispatch => {
        const authData = {
            email,
            password
        };
        axios.post('admin/login', authData)
            .then(response => {
                if (response.data.status) {
                    const meta = {
                        token: response.data.entity.token,
                        id: response.data.entity.id,
                        role: response.data.entity.roles
                    }
                    setItem('meta', meta);
                    dispatch(authSuccess(response.data.entity));

                } else {
                    dispatch(authFail('Invalid username or password !'));
                }
            })
            .catch(error => {
                if (error.response && error.response.status === 401) {
                    dispatch(authFail(error.response.data.message));
                } else {
                    dispatch(authFail('Something Went Wrong !!'));
                }
            });
    };
};

export const employeeLogin = (email, password) => {
    return dispatch => {
        dispatch(updateLoadingStatus(true));
        const authData = {
            email,
            password
        };
        axios.post('employee/login', authData)
            .then(response => {
                dispatch(updateLoadingStatus(false));
                if (response.data.status) {
                    const meta = {
                        token: response.data.entity.token,
                        id: response.data.entity.id,
                        companyId: response.data.entity.companyId,
                        role: response.data.entity.roles
                    }
                    setItem('meta', meta);
                    dispatch(authSuccess(response.data.entity));

                } else {
                    dispatch(authFail('Invalid username or password !'));
                }
            })
            .catch(error => {
                dispatch(updateLoadingStatus(false));
                if (error.response && error.response.status === 401) {
                    dispatch(authFail(error.response.data.message));
                } else {
                    dispatch(authFail('Something Went Wrong !!'));
                }
            });
    };
};

export const setRedirectPath = (path) => {
    return {
        type: actionTypes.SET_REDIRECT_PATH,
        path: path
    };
};

export const emptyToken = () => {
    return {
        type: actionTypes.EMPTY_TOKEN
    };
};
