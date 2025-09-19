
import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

/**
 
  @param {Object} filters 
 */
export const fetchUserData = async ({ username = '', location = '', minRepos = '' }) => {
  try {
    const queryParts = [];

    if (username) queryParts.push(encodeURIComponent(username));
    if (location) queryParts.push(`location:${encodeURIComponent(location)}`);
    if (minRepos) queryParts.push(`repos:%3E%3D${encodeURIComponent(minRepos)}`);

    const query = queryParts.join('+'); // Use raw "+" to separate parts
    const url = `${BASE_URL}?q=${query}`; // DO NOT encode whole query string

    console.log('GitHub API URL:', url);
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.error('GitHub API error:', error);
    throw error;
  }
};
