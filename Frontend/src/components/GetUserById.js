import React, { useState } from 'react';
import axios from 'axios';

const GetUserById = () => {
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState(null);

  const handleFetchUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3000/api/user/${userId}`);
      setUser(response.data);
    } catch (error) {
      console.error(error);
      setUser(null);
    }
  };

  return (
    <div className="my-4">
      <form onSubmit={handleFetchUser}>
        <input 
          type="number" 
          placeholder="User ID" 
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required 
          className="p-2 border rounded dark:bg-gray-700 dark:text-white"
        />
        <button type="submit" className="p-2 bg-green-500 text-white rounded">Fetch User</button>
      </form>
      {user && (
        <div className="mt-2">
          <h3 className="text-lg">User Details:</h3>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default GetUserById;