import axios from 'axios';
import * as globals from '../globals';

const instance = axios.create({
    baseURL: globals.server,
});

export default instance;