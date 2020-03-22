
import { getItem } from '../helpers/cookie';

export const addCardUrl = () => {
    return `users/${getItem('id')}/cards`;
};
