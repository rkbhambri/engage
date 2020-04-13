import * as actionTypes from './actionTypes';
import axios from '../../httpInstance/axios';
import { cardsUrl } from '../../url/MyCards';

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


export const getCards = () => {
    return dispatch => {
        axios.get(cardsUrl())
            .then(response => {
                if (response.data.status) {

                } else {

                }
            })
            .catch(error => {
                // dispatch(authFail('Something Went Wrong !!'));
            });
    };
};

export const addCard = (cardDetails) => {
    return dispatch => {
        axios.post(cardsUrl(), cardDetails)
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

