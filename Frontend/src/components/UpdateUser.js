import React, { useState } from 'react';
import axios from 'axios';

const UpdateUser = () => {
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/user/${userId}`, { username, email });
      alert('User updated!');
      setUserId('');
      setUsername('');
      setEmail('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleUpdate} className="my-4">
      <input 
        type="number" 
        placeholder="User ID" 
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        required 
        className="p-2 border rounded dark:bg-gray-700 dark:text-white"
      />
      <input 
        type="text" 
        placeholder="New Username" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-2 border rounded dark:bg-gray-700 dark:text-white"
      />
      <input 
        type="email" 
        placeholder="New Email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border rounded dark:bg-gray-700 dark:text-white"
      />
      <button type="submit" className="p-2 bg-yellow-500 text-white rounded">Update User</button>
    </form>
  );
};

export default UpdateUser;