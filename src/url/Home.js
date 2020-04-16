

import { getItem } from '../helpers/cookie';

export const userProfileUrl = () => {
    return `users/${getItem('id')}/profile`;
};
