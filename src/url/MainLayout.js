
import { getItem } from '../helpers/cookie';

export const updateUserLocationUrl = () => {
    return `users/${getItem('id')}/location`;
};
