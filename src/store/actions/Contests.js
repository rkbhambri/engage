import * as actionTypes from './actionTypes';
import axios from '../../httpInstance/axios';
import { getItem } from '../../helpers/cookie';

export const setQuestions = (questions) => {
    return {
        type: actionTypes.SET_QUESTIONS,
        questions
    };
};

export const getQuestions = () => {
    return dispatch => {
        axios.get(`users/${getItem('id')}/questions`)
            .then(response => {
                if (response.data.entity) {
                    dispatch(setQuestions(response.data.entity));
                }
            })
            .catch(error => {

            });
    };
};