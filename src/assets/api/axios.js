import axios from 'axios';

const api = axios.create({
    baseURL: 'http://BASE_URL/api/v1/clinic',
});

export const login =async (username, password) => {
    const response = await axios.post(`${BASE_URL}/users/login`, { username, password})
return response.data
}

export default api;