import * as actionTypes from './actionTypes';
import axios from '../../httpInstance/axios';
import { getItem } from '../../helpers/cookie';

export const setUnsettledContests = (unsettledContests) => {
    return {
        type: actionTypes.SET_UNSETTLED_CONTESTS,
        unsettledContests
    };
};

export const getUnsettledContests = () => {
    return dispatch => {
        axios.get(`users/${getItem('id')}/questions/unsettled`)
            .then(response => {
                if (response.data.entity) {
                    dispatch(setUnsettledContests(response.data.entity));
                }
            })
            .catch(error => {

            });
    };
};

export const setSettledContests = (settledContests) => {
    return {
        type: actionTypes.SET_SETTLED_CONTESTS,
        settledContests
    };
};

export const getSettledContests = () => {
    return dispatch => {
        axios.get(`users/${getItem('id')}/questions/settled`)
            .then(response => {
                if (response.data.entity) {
                    dispatch(setSettledContests(response.data.entity));
                }
            })
            .catch(error => {

            });
    };
};