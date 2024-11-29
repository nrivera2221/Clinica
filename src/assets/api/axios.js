import axios from 'axios';

const api = axios.create({
    baseURL: 'http://BASE_URL/api/v1/clinic',
});

export default api;