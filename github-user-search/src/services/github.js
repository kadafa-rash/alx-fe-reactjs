
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_GITHUB_API_URL;
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

const headers = API_KEY
  ? { Authorization: `token ${API_KEY}` }
  : {};

export const searchUsers = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/users`, {
    params: { q: query },
    headers,
  });
  return response.data;
};
