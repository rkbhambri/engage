import axios from '../../httpInstance/axios';

export const getRequest = (url) => {
    axios.get(url)
        .then(response => {
            return response;
        })
        .catch(error => {
            return error.response;
        });
};

export const postRequest = (url, data) => {
    axios.post(url, data)
        .then(response => {
            return response;
        })
        .catch(error => {
            return error.response;
        });
};

export const putRequest = (url, data) => {
    axios.put(url, data)
        .then(response => {
            return response;
        })
        .catch(error => {
            return error.response;
        });
};

export const deleteRequest = (url, data) => {
    axios.delete(url, data)
        .then(response => {
            return response;
        })
        .catch(error => {
            return error.response;
        });
};