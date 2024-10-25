import React, { useState } from 'react';
import CreateUser from './components/CreateUser';
import GetAllUsers from './components/GetAllUsers';
import GetUserById from './components/GetUserById';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';
import DarkModeToggle from './components/DarkModeToggle';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

const App = () => {
  const [users, setUsers] = useState([]);

  const handleUserCreated = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} transition duration-300`}>
      <div className="p-4">
        <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <input
          type="text"
          placeholder="Search User"
          className="mt-4 p-2 border rounded dark:bg-gray-700 dark:text-white"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <h1 className="text-2xl mt-4">User Management</h1>
        <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <UserForm onUserCreated={handleUserCreated} />
      <UserList users={users} />
    </div>
      </div>
    </div>
  );
};

export default App;