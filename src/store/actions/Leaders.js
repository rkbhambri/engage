import * as actionTypes from './actionTypes';
import axios from '../../httpInstance/axios';
// import { getItem } from '../../helpers/cookie';

export const setLeaders = (leaders) => {
    return {
        type: actionTypes.SET_LEADERS,
        leaders
    };
};

export const getLeaders = () => {
    return dispatch => {
        axios.get(`leadership`)
            .then(response => {
                if (response.data.entity) {
                    dispatch(setLeaders(response.data.entity));
                }
            })
            .catch(error => {

            });
    };
};