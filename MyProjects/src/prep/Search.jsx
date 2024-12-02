import React, { useEffect, useState, useCallback } from 'react';

function Search() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const fetchingData = async () => {
    setLoading(true);
    try {
      const apiresponse = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!apiresponse.ok) {
        throw new Error("Network is failed");
      }
      const res = await apiresponse.json();
      setPosts(res);
      setFilteredData(res);  // Initialize filteredData with fetched posts
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  const handleSearch = useCallback(
    debounce((searchTerm) => {
      setFilteredData(
        posts.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }, 500), // 500ms debounce delay
    [posts]
  );

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearch(value);
    handleSearch(value);
  };

  if (loading) return <div>Loading..</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Posts List..</h2>
      <input
        type="text"
        placeholder="Search a Post title.."
        value={search}
        onChange={handleInputChange}
      />
      <div>
        {filteredData.map((post) => (
          <div key={post.id} style={{ border: "1px solid black" }}>
            <h2>{post.title}</h2>
          </div>
        ))}
        {filteredData.length === 0 && <p>No search results found..</p>}
      </div>
    </div>
  );
}

function debounce(func, delay) {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
}

export default Search;
