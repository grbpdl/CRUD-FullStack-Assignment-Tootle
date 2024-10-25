
import React, { useState } from 'react';
import { createUser } from '../api/userApi';

const UserForm = ({ onUserCreated }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const newUser = await createUser({ username, email });
      onUserCreated(newUser);
      setUsername('');
      setEmail('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      {error && <div className="text-red-500">{error}</div>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded mr-2"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded mr-2"
        required
      />
      <button
        type="submit"
        disabled={loading}
        className={`bg-blue-500 text-white p-2 rounded ${loading ? 'opacity-50' : ''}`}
      >
        {loading ? 'Adding...' : 'Add User'}
      </button>
    </form>
  );
};

export default UserForm;
