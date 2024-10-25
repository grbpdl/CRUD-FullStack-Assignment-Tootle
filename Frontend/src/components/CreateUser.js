
import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/user', { username, email });
      alert(`User created: ${response.data.userId}`);
      setUsername('');
      setEmail('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <input 
        type="text" 
        placeholder="Username" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required 
        className="p-2 border rounded dark:bg-gray-700 dark:text-white"
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required 
        className="p-2 border rounded dark:bg-gray-700 dark:text-white"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">Create User</button>
    </form>
  );
};

export default CreateUser;
