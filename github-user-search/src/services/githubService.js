import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';
export const fetchUserData = async ({ username = '', location = '', minRepos = '' }) => {
  try {
    const queryParts = [];

    if (username) queryParts.push(encodeURIComponent(username));
    if (location) queryParts.push(`location:${encodeURIComponent(location)}`);
    if (minRepos) queryParts.push(`repos:>=${encodeURIComponent(minRepos)}`);

    const query = queryParts.join('+');
    const url = `${BASE_URL}?q=${query}`;

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const message = error.response?.data?.message || error.message;

      console.error(`GitHub API error (${status}): ${message}`);

      throw new Error(`GitHub API error: ${message}`);
    } else {
      console.error('Unexpected error:', error);
      throw new Error('An unexpected error occurred. Please try again later.');
    }
  }
};
