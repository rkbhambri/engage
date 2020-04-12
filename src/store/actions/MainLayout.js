import * as actionTypes from './actionTypes';
import axios from '../../httpInstance/axios';
import { updateUserLocationUrl } from '../../url/MainLayout';

export const setSnackbarMessage = (message) => {
    return {
        type: actionTypes.SET_SNACKBAR_MESSAGE,
        message
    };
};

export const updateUserLocation = (location) => {
    return dispatch => {
        axios.put(updateUserLocationUrl(), location)
            .then(response => {

            })
            .catch(error => {

            });
    };
};

