import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    userDetails: {},
    userSocialUrl: {}
};

const setUserDetails = (state, action) => {
    return updateObject(state, {
        userDetails: action.userDetails
    });
};

const setUserSocialUrl = (state, action) => {
    return updateObject(state, {
        userSocialUrl: action.userSocialUrl
    });
};

const emptyUserProfile = (state, action) => {
    return updateObject(state, {
        userDetails: {},
        userSocialUrl: {}
    });
};

const Home = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER_DETAILS:
            return setUserDetails(state, action);
        case actionTypes.SET_USER_SOCIAL_URL:
            return setUserSocialUrl(state, action);
        case actionTypes.EMPTY_USER_PROFILE:
            return emptyUserProfile(state, action);
        default:
            return state;
    }
};

export default Home;