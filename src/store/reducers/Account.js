import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    unsettledContests: [],
    settledContests: []
};

const setUnsettledContests = (state, action) => {
    return updateObject(state, {
        unsettledContests: action.unsettledContests
    });
};

const setSettledContests = (state, action) => {
    return updateObject(state, {
        settledContests: action.settledContests
    });
};

const Account = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_UNSETTLED_CONTESTS:
            return setUnsettledContests(state, action);
        case actionTypes.SET_SETTLED_CONTESTS:
            return setSettledContests(state, action);
        default:
            return state;
    }
};

export default Account;