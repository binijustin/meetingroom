import axios from 'axios';
import * as globals from '../globals';

const instance = axios.create({
    baseURL: globals.server,
    headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + localStorage.getItem('stringParam')
    }
});

export default instance;