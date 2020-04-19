import axios from 'axios';
import { getToken, isAuthenticated } from './auth';

const api = axios.create({
  baseURL: 'https://hospion.herokuapp.com/',
});

api.interceptors.request.use(async (config) => {
  if (isAuthenticated()) {
    const token = getToken();

    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  }
  return config;
});

export default api;
