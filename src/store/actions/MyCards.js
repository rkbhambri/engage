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

export const setCards = (cards) => {
    return {
        type: actionTypes.SET_CARDS,
        cards
    };
};

export const getCards = () => {
    return dispatch => {
        axios.get(cardsUrl())
            .then(response => {
                if (response.data.entity) {
                    dispatch(setCards(response.data.entity.cards));
                } else {
                    dispatch(setSnackbarMessage(response.data.message));
                }
            })
            .catch(error => {
                dispatch(setSnackbarMessage('Something Went Wrong !!'));
            });
    };
};

export const updateCards = (cardDetails) => {
    return {
        type: actionTypes.UPDATE_CARDS,
        cardDetails
    };
};

export const addCard = (cardDetails) => {
    return dispatch => {
        axios.post(cardsUrl(), cardDetails)
            .then(response => {
                if (response.data.entity) {
                    dispatch(updateCards(response.data.entity));
                    dispatch(setSnackbarMessage(response.data.message));
                } else {
                    dispatch(setSnackbarMessage(response.data.message));
                }
            })
            .catch(error => {
                // dispatch(authFail('Something Went Wrong !!'));
            });
    };
};

export const emptyCards = () => {
    return {
        type: actionTypes.EMPTY_CARDS
    };
};
