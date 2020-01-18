import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    walletDetails: {},
    transactions: []
};

const setWalletDetails = (state, action) => {
    return updateObject(state, {
        walletDetails: action.details.wallet
    });
};

const setTransactions = (state, action) => {
    return updateObject(state, {
        transactions: action.transactions
    });
};

const Wallet = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_WALLET_DETAILS:
            return setWalletDetails(state, action);
        case actionTypes.SET_TRANSACTIONS:
            return setTransactions(state, action);
        default:
            return state;
    }
};

export default Wallet;