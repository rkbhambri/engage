import * as actionTypes from './actionTypes';
import axios from '../../httpInstance/axios';
import { setItem, clearItems } from '../../helpers/cookie';
import { loginUrl, signupUrl, socialLoginUrl, verifyEmailUrl, setPasswordUrl } from '../../url/Auth';


export const setSnackbarMessage = (message) => {
    return {
        type: actionTypes.SET_SNACKBAR_MESSAGE,
        message
    };
};

export const authSuccess = (response) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        adminDetails: response,
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

export const login = (loginDetails) => {
    return dispatch => {
        dispatch(updateLoadingStatus(true));
        axios.post(loginUrl(), loginDetails)
            .then(response => {
                dispatch(updateLoadingStatus(false));
                if (response.data.status) {
                    const auth = {
                        token: response.data.entity.token,
                        id: response.data.entity.id,
                        role: response.data.entity.roles
                    }
                    setItem('auth', auth);
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

export const signup = (signupDetails) => {
    return dispatch => {
        dispatch(updateLoadingStatus(true));
        axios.post(signupUrl(), signupDetails)
            .then(response => {
                dispatch(updateLoadingStatus(false));
                if (response.data.status) {
                    dispatch(setSnackbarMessage('User created successfully !'));
                    dispatch(login(signupDetails));
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

export const socialLogin = (authDetails) => {
    return dispatch => {
        dispatch(updateLoadingStatus(true));
        axios.post(socialLoginUrl(), authDetails)
            .then(response => {
                dispatch(updateLoadingStatus(false));
                if (response.data.status) {
                    const auth = {
                        token: response.data.entity.token,
                        id: response.data.entity.id,
                        role: response.data.entity.roles
                    }
                    setItem('auth', auth);
                    dispatch(authSuccess(response.data.entity));
                    // dispatch(checkUserProfileUpdated(response.data.entity.isUserProfileUpdated));
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

export const setRequestToSetPasswordId = (requestToSetPassword) => {
    return {
        type: actionTypes.SET_REQUEST_TO_SET_PASSWORD_ID,
        requestToSetPassword
    };
};

export const verifyEmail = (email) => {
    return dispatch => {
        dispatch(updateLoadingStatus(true));
        axios.post(verifyEmailUrl(), { email: email })
            .then(response => {
                dispatch(updateLoadingStatus(false));
                if (response.data.status) {
                    dispatch(setSnackbarMessage(response.data.message));
                    dispatch(setRequestToSetPasswordId(response.data.entity.requestToSetPassword.id));
                } else {
                    dispatch(setSnackbarMessage(response.data.message));
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


export const updateSetPasswordStatus = (status) => {
    return {
        type: actionTypes.UPDATE_SET_PASSWORD_STATUS,
        status
    };
};

export const setPassword = (passwordData) => {
    return dispatch => {
        // dispatch(updateLoadingStatus(true));
        axios.post(setPasswordUrl(), passwordData)
            .then(response => {
                // dispatch(updateLoadingStatus(false));
                if (response.data.status) {
                    dispatch(setSnackbarMessage('Password set successfully !'));
                    dispatch(updateSetPasswordStatus(true));
                }
                else {
                    dispatch(updateSetPasswordStatus(false));
                    dispatch(setSnackbarMessage(response.data.message));
                }
            })
            .catch(error => {
                // dispatch(updateLoadingStatus(false));
                if (error.response && error.response.status === 401) {
                    dispatch(authFail(error.response.data.message));
                } else {
                    dispatch(authFail('Something Went Wrong !!'));
                }
            });
    };
};
