
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetAllUsers = ({ searchTerm }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-xl mt-4">All Users</h2>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id} className="border p-2 rounded my-1 dark:bg-gray-800">
            {user.username} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetAllUsers;
