import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001'
});

export const ping = () => api.get('/tags');
export const getTags = () => api.get('/tags/tags');

const apis = {
    ping,
    getTags
};

export default apis;
