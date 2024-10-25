// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../api/userApi';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <ul className="list-disc list-inside">
      {users.map(user => (
        <li key={user.id} className="border-b border-gray-300 py-2">
          <span className="font-bold">{user.username}</span> - {user.email}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
