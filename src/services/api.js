import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hospion.herokuapp.com/',
});

export default api;
