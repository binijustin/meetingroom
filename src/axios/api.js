import axios from 'axios';
import * as globals from '../globals';

const instance = axios.create({
    baseURL: globals.api
});

const client = (token = null) => {
    const defaultOptions = {
        headers: {
            Authorization: token ? 'Basic '+token : '',
        },
    };

    return {
        get: (url, options = {}) => instance.get(url, { ...defaultOptions, ...options }),
        post: (url, data, options = {}) => instance.post(url, data, { ...defaultOptions, ...options }),
        put: (url, data, options = {}) => instance.put(url, data, { ...defaultOptions, ...options }),
        delete: (url, options = {}) => instance.delete(url, { ...defaultOptions, ...options }),
    };
};

export default client;