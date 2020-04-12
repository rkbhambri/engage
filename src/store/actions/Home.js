import * as actionTypes from './actionTypes';
import axios from '../../httpInstance/axios';
import { userProfileUrl } from '../../url/Home';

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

