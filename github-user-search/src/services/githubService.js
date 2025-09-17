import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q", "location", "minRepos';

export const fetchUserData = async (username) => {
  const response = await axios.get(`${BASE_URL}${username}`);
  return response.data;
};
