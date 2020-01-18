import * as actionTypes from './actionTypes';
import axios from '../../httpInstance/axios';
import { getItem } from '../../helpers/cookie';

export const setWalletDetails = (details) => {
    return {
        type: actionTypes.SET_WALLET_DETAILS,
        details
    };
};

export const getWalletDetails = () => {
    return dispatch => {
        axios.get(`users/${getItem('id')}/wallet`)
            .then(response => {
                if (response.data.entity) {
                    dispatch(setWalletDetails(response.data.entity));
                }
            })
            .catch(error => {

            });
    };
};

export const setTransactions = (transactions) => {
    return {
        type: actionTypes.SET_TRANSACTIONS,
        transactions
    };
};

export const getTransactions = () => {
    return dispatch => {
        axios.get(`users/${getItem('id')}/transactions`)
            .then(response => {
                if (response.data.entity) {
                    dispatch(setTransactions(response.data.entity));
                }
            })
            .catch(error => {

            });
    };
};
