
import { getItem } from '../helpers/cookie';

export const cardsUrl = () => {
    return `users/${getItem('id')}/cards`;
};

