import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    cards: []
};

const setCards = (state, action) => {
    return updateObject(state, {
        cards: action.cards
    });
};

const updateCards = (state, action) => {
    const updateCardsData = state.cards.concat(action.cardDetails);
    return updateObject(state, {
        cards: updateCardsData
    });
};

const emptyCards = (state, action) => {
    return updateObject(state, {
        cards: []
    });
};

const MyCards = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CARDS:
            return setCards(state, action);
        case actionTypes.EMPTY_CARDS:
            return emptyCards(state, action);
        case actionTypes.UPDATE_CARDS:
            return updateCards(state, action);
        default:
            return state;
    }
};

export default MyCards;