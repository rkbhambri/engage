import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import { isArrayEmpty } from '../../helpers/array';

const initialState = {
    leaders: [],
    isLeadersEmpty: false
};

const setLeaders = (state, action) => {
    return updateObject(state, {
        leaders: action.leaders,
        isLeadersEmpty: isArrayEmpty(action.leaders)
    });
};

const Leaders = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LEADERS:
            return setLeaders(state, action);
        default:
            return state;
    }
};

export default Leaders;