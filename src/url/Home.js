

import { getItem } from '../helpers/cookie';

export const userProfileUrl = () => {
    return `users/${getItem('id')}/profile`;
};

export const socialUrl = () => {
    return `users/${getItem('id')}/social`;
};
