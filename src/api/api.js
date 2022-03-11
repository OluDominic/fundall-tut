import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer API_TOKEN'
    }
});
export default api;