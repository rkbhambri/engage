/*
 * Define which type of action to be dispatched to reducer
 */


// For Login
export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const SET_REDIRECT_PATH = 'SET_REDIRECT_PATH';
export const SET_USER_PROFILE_DETAILS = 'SET_USER_PROFILE_DETAILS';
export const EMPTY_TOKEN = 'EMPTY_TOKEN';
export const UPDATE_LOADING_STATUS = 'UPDATE_LOADING_STATUS';

// For Contests

export const SET_QUESTIONS = 'SET_QUESTIONS';

// For Leaders
export const SET_LEADERS = 'SET_LEADERS'

// For Wallet
export const SET_WALLET_DETAILS = 'SET_WALLET_DETAILS';
export const SET_TRANSACTIONS = 'SET_TRANSACTIONS';

// For Account
export const SET_UNSETTLED_CONTESTS = 'SET_UNSETTLED_CONTESTS';
export const SET_SETTLED_CONTESTS = 'SET_SETTLED_CONTESTS';

// Snackbar Message
export const SET_SNACKBAR_MESSAGE = 'SET_SNACKBAR_MESSAGE';
