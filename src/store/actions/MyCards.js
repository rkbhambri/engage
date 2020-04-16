import * as actionTypes from './actionTypes';
import axios from '../../httpInstance/axios';
import { cardsUrl, cardDetailsUrl, socialUrl } from '../../url/MyCards';

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

export const setUserDetails = (userDetails) => {
    return {
        type: actionTypes.SET_USER_DETAILS,
        userDetails
    };
};

export const getCards = () => {
    return dispatch => {
        axios.get(cardsUrl())
            .then(response => {
                if (response.data.entity) {
                    dispatch(setCards(response.data.entity.cards || []));
                    dispatch(setUserDetails(response.data.entity.user));
                } else {
                    dispatch(setSnackbarMessage(response.data.message));
                }
            })
            .catch(error => {
                dispatch(setSnackbarMessage('Something Went Wrong !!'));
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

export const updateCardDetails = (cardId, cardDetails) => {
    return dispatch => {
        axios.put(cardDetailsUrl(cardId), cardDetails)
            .then(response => {
                if (response.data.entity) {
                    // dispatch(updateCards(response.data.entity));
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
