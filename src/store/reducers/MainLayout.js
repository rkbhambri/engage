import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    message: null
};

const setSnackbarMessage = (state, action) => {
    return updateObject(state, {
        message: action.message
    });
};

const MainLayout = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SNACKBAR_MESSAGE:
            return setSnackbarMessage(state, action);
        default:
            return state;
    }
};

export default MainLayout;