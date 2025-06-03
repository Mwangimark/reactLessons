import React, { useState, useEffect } from 'react';

const GitHub = () => {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!searchTerm) return; // skip fetch if searchTerm is empty

    setLoading(true);
    setError(null);

    fetch(`https://api.github.com/search/users?q=${searchTerm}`)
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setUsers(data.items);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(query);
  };

  return (
    <>
    <p>Use Effects lessons on git APIs</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading users...</p>}
      {error && <p>Error: {error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <a href={user.html_url} target="_blank">{user.login}</a>
          </li>
        ))}
      </ul>
    </>
  );
};
// this is a use effect .js learning function 

export default GitHub;
