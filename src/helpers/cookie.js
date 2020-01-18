import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const getItem = (key) => {
    const meta = cookies.get('auth');
    return meta && meta[key];
};

export const setItem = (key, value) => {
    cookies.set(key, value, { path: '/' });
};

export const removeItem = (key) => {
    cookies.remove(key, { path: '/' });
};

export const clearItems = () => {
    const allCookies = cookies.getAll();
    for (let key in allCookies) {
        cookies.remove(key, { path: '/' });
    }
};

