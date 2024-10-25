import React, { useState } from 'react';
import axios from 'axios';

const DeleteUser = () => {
  const [userId, setUserId] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:3000/api/user/${userId}`);
      alert('User deleted!');
      setUserId('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleDelete} className="my-4">
      <input 
        type="number" 
        placeholder="User ID" 
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        required 
        className="p-2 border rounded dark:bg-gray-700 dark:text-white"
      />
      <button type="submit" className="p-2 bg-red-500 text-white rounded">Delete User</button>
    </form>
  );
};

export default DeleteUser;