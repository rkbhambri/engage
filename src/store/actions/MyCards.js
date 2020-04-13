import * as actionTypes from './actionTypes';
import axios from '../../httpInstance/axios';
import { cardsUrl } from '../../url/MyCards';

export const setSnackbarMessage = (message) => {
    return {
        type: actionTypes.SET_SNACKBAR_MESSAGE,
        message
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
                if (response.data.entity) {

                } else {
                    dispatch(setSnackbarMessage(response.data.message));
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
                if (response.data.entity) {
                    console.log('===response===', response);
                    dispatch(setSnackbarMessage(response.data.message));
                } else {
                    console.log('===errrr===');
                    dispatch(setSnackbarMessage(response.data.message));
                }
            })
            .catch(error => {
                // dispatch(authFail('Something Went Wrong !!'));
            });
    };
};

