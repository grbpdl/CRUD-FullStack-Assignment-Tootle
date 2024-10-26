import React, { useState, useEffect } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import UserCard from './components/UserCard';
import UserForm from './components/UserForm';


const App = () => {
  const [theme, setTheme] = useState("dark");
  const [isDarkMode, setDarkMode] = useState(false);
  const [isOpenPopup, setOpenPopup] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Toggle dark mode based on the theme
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, [theme]);

  // Switch theme between light and dark
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Sample user data
  const users = [
    { id: 1, username: "JohnDoe", email: "johndoe@example.com" },
    { id: 3, username: "Marry Jane", email: "marryjane@mail.com" },
    { id: 4, username: "Example User", email: "test@mail.com" }
  ];

  // Filter users based on the search term
  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Placeholder functions for edit and delete actions
  const onEditUser = (user) => {
    console.log("Edit user:", user);
  };

  const onDeleteUser = (userId) => {
    console.log("Delete user with ID:", userId);
  };

  // Close the popup
  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  return (
    <div className="w-full min-h-screen bg-white dark:bg-black overflow-hidden">
      <div className="flex justify-center gap-2 h-auto">
        <p className="text-3xl font-bold text-black dark:text-white p-2">
          CRUD Operations
        </p>

        <div className="flex justify-end p-2">
          <DarkModeSwitch
            style={{ marginBottom: '2rem' }}
            checked={isDarkMode}
            onChange={handleThemeSwitch}
            size={40}
          />
        </div>
      </div>

      <div className="p-3">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full p-2 border rounded-lg mb-4 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="space-y-4">
          {filteredUsers.map(user => (
            <UserCard
              key={user.id}
              user={user}
              onEdit={onEditUser}
              onDelete={onDeleteUser}
            />
          ))}
        </div>
      </div>

      {/* Add User Button */}
      <div className="fixed bottom-4 right-4">
        <button
          className="bg-purple-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg"
          onClick={() => setOpenPopup(true)}
        >
          Add Users
        </button>
      </div>

      {/* Popup Modal */}
      {isOpenPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg max-w-md w-full">
            
            <div className='flex justify-between'>
            <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">
              User Form
            </h2>
            <button
              className=" mt-0 text-gray-500 dark:text-gray-300 font-bold mb-4"
              onClick={handleClosePopup}
            >
              ✕
            </button>
            </div>
            <UserForm/>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
