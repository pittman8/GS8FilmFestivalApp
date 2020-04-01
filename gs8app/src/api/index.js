import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001',
});

export const ping = () => api.get('/tags');
export const getTags = () => api.get('/tags/tags');
export const getYoutube = () => api.get('/youtube');

const apis = {
    ping,
    getTags,
    getYoutube,
};

export default apis;