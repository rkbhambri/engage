
import { getItem } from '../helpers/cookie';

export const cardsUrl = () => {
    return `users/${getItem('id')}/cards`;
};

export const cardDetailsUrl = (cardId) => {
    return `cards/${cardId}/details`;
};
