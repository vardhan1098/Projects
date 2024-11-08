import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetch_Users_Success,fetch_User_Error,fetch_user } from './Redux/Action';

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const loading =  useSelector((state)=> state.loading);
  const error = useSelector((state) => state.error)

  const fetchUsers = async () => {
    dispatch(fetch_user());
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      dispatch(fetch_Users_Success(data));
    } catch (err) {
      dispatch(fetch_User_Error(err.message));
    }
  };

  return (
    <div>
      <h1>User Data</h1>
      
      {/* Button to fetch users */}
      <button onClick={fetchUsers}>Fetch Users</button>

      {/* Display loading, error, or user list */}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
      
      {!loading && !error && users.length === 0 && <p>No users available</p>}
    </div>
  );
};

export default App;
