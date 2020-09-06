import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/api' 
});

/* Note: To access http://localhost:3001/api, you must start the server in backend/ directory in this project 
and give the comand npm start */

export default api;