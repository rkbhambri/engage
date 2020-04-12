import * as actionTypes from './actionTypes';
import axios from '../../httpInstance/axios';
import { userProfileUrl, socialUrl } from '../../url/Home';

export const setUserDetails = (userDetails) => {
    return {
        type: actionTypes.SET_USER_DETAILS,
        userDetails
    };
};

export const getUserProfile = () => {
    return dispatch => {
        axios.get(userProfileUrl())
            .then(response => {
                if (response.data.entity) {
                    dispatch(setUserDetails(response.data.entity));
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
                }
            })
            .catch(error => {

            });
    };
};

export const setSocialUrl = (socialUrl) => {
    return {
        type: actionTypes.SET_SOCIAL_URL,
        socialUrl
    };
};

export const getSocialUrl = () => {
    return dispatch => {
        axios.get(socialUrl())
            .then(response => {
                if (response.data.entity) {
                    dispatch(setSocialUrl(response.data.entity));
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
                    dispatch(setUserDetails(response.data.entity));
                }
            })
            .catch(error => {

            });
    };
};
