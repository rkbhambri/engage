import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    userDetails: {},
    socialUrl: {}
};

const setUserDetails = (state, action) => {
    return updateObject(state, {
        userDetails: action.userDetails
    });
};

const setSocialUrl = (state, action) => {
    return updateObject(state, {
        socialUrl: action.socialUrl
    });
};

const Home = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER_DETAILS:
            return setUserDetails(state, action);
        case actionTypes.SET_SOCIAL_URL:
            return setSocialUrl(state, action);
        default:
            return state;
    }
};

export default Home;