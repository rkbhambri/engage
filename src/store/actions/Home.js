import * as actionTypes from './actionTypes';
import axios from '../../httpInstance/axios';
import { userProfileUrl } from '../../url/Home';
import { socialUrl } from '../../url/MyCards';

export const setSnackbarMessage = (message) => {
    return {
        type: actionTypes.SET_SNACKBAR_MESSAGE,
        message
    };
};

export const setUserDetails = (userDetails) => {
    return {
        type: actionTypes.SET_USER_DETAILS,
        userDetails
    };
};

export const setUserSocialUrl = (userSocialUrl) => {
    return {
        type: actionTypes.SET_USER_SOCIAL_URL,
        userSocialUrl
    };
};

export const getUserProfile = () => {
    return dispatch => {
        axios.get(userProfileUrl())
            .then(response => {
                if (response.data.entity) {
                    dispatch(setUserSocialUrl(response.data.entity.social));
                    dispatch(setUserDetails(response.data.entity.user));
                }
            })
            .catch(error => {

            });
    };
};

export const updateUserProfile = (profileDetails) => {
    return dispatch => {
        axios.put(userProfileUrl(), profileDetails)
            .then(response => {
                if (response.data.entity) {
                    dispatch(setUserDetails(response.data.entity));
                    dispatch(setSnackbarMessage(response.data.message));
                } else {
                    dispatch(setSnackbarMessage(response.data.message));
                }
            })
            .catch(error => {

            });
    };
};

export const updateSocialUrl = (socialPlatform) => {
    return dispatch => {
        axios.put(socialUrl(), socialPlatform)
            .then(response => {
                if (response.data.entity) {
                    dispatch(setUserSocialUrl(response.data.entity));
                    dispatch(setSnackbarMessage(response.data.message));
                }
            })
            .catch(error => {

            });
    };
};

export const emptyUserProfile = () => {
    return {
        type: actionTypes.EMPTY_USER_PROFILE
    };
};
