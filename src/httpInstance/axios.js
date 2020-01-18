// importing axios for network request
import axios from 'axios';
import { axiosBaseUrl } from '../config';
import { getItem } from '../helpers/cookie';
// Get Authentication token
const getAuthToken = () => {
    const token = getItem('token');
    return token;
}

// Created Axios instance to use it in whole application
var instance = axios.create({
    baseURL: axiosBaseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
});

// declaring interceptors
instance.interceptors.request.use(response => {
    const token = getAuthToken();
    // Check if User is authenticated or not
    if (token) {
        response.headers = {
            'x-access-token': `${token}`
        }
    }
    return response;
}, error => {
    return error;
});

export default instance;


