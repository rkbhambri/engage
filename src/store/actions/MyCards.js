import * as actionTypes from './actionTypes';
import axios from '../../httpInstance/axios';
import { addCardUrl } from '../../url/MyCards';

export const authSuccess = (response) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        superAdminDetails: response,
    };
};

export const updateLoadingStatus = (status) => {
    return {
        type: actionTypes.UPDATE_LOADING_STATUS,
        status
    };
};

export const addCard = (cardDetails) => {
    return dispatch => {
        axios.post(addCardUrl, cardDetails)
            .then(response => {
                dispatch(updateLoadingStatus(false));
                if (response.data.status) {

                } else {
                }
            })
            .catch(error => {
                // dispatch(authFail('Something Went Wrong !!'));
            });
    };
};

