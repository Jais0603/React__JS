import React, { useState } from 'react';
import './api.css';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      const repoResponse = await fetch(`https://api.github.com/users/${username}/repos`);

      if (userResponse.status === 404) {
        setError('User not found');
        setUserData(null);
        setRepos([]);
      } else {
        const userData = await userResponse.json();
        const reposData = await repoResponse.json();

        setUserData(userData);
        setRepos(reposData);
        setError(null);
      }
    } catch (err) {
      setError('Error fetching data');
      setUserData(null);
      setRepos([]);
    }
  };

  return (
    <div className="App">
      <h1>Github Repository Search</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p className="error">{error}</p>}

      {userData && (
        <div>
          <h2>{userData.login}</h2>
          <p>Bio: {userData.bio || 'Not available'}</p>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>

          <h3>Repositories:</h3>
          <ul>
            {repos.map((repo) => (
              <li key={repo.id}>{repo.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
