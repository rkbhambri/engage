import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    userDetails: {}
};

const setUserDetails = (state, action) => {
    return updateObject(state, {
        userDetails: action.userDetails
    });
};

const Home = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER_DETAILS:
            return setUserDetails(state, action);
        default:
            return state;
    }
};

export default Home;