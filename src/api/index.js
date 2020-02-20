import axios from 'axios';
import ENDPOINTS from './endpoints';

const BASE_URL = 'https://api.scryfall.com';

const apiInstance = axios.create({
  baseURL: BASE_URL,
});

export const getCards = q =>
  apiInstance.request({
    url: ENDPOINTS.CARDS,
    method: 'GET',
    params: {q},
  });
