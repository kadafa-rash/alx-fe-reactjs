import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [formData, setFormData] = useState({
    username: '',
    location: '',
    minRepos: ''
  });

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);

    try {
      const results = await fetchUserData(formData);
      setUsers(results.items || []);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">GitHub User Search</h1>

      <form onSubmit={handleSubmit} className="grid gap-4 mb-6 grid-cols-1 sm:grid-cols-3">
        <input

          name="username"
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="p-2 border rounded hover:bg-gray-200"
        />
        <input
          name="location"
          type="text"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="p-2 border rounded hover:bg-gray-200"
        />
        <input
          name="minRepos"
          type="number"
          placeholder="Min Repos"
          value={formData.minRepos}
          onChange={handleChange}
          className="p-2 border rounded hover:bg-gray-200"
        />
        <button
          type="submit"
          className="sm:col-span-3 bg-blue-200 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-500">Looks like we can't find users with that criteria.</p>}

      {users.length > 0 && (
        <div className="grid gap-4">
          {users.map((user) => (
            <div key={user.id} className="flex items-center space-x-4 p-4 border rounded shadow-sm">
              <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
              <div>
                <h2 className="text-xl font-semibold">{user.login}</h2>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View GitHub Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
