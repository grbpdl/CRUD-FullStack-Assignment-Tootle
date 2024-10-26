import React, { useState, useEffect } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import UserCard from './components/UserCard';
import UserForm from './components/UserForm';
import { fetchUsers, createUser, deleteUser, updateUser } from './api/userApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './components/Loader'; // Ensure this is the correct path

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [isDarkMode, setDarkMode] = useState(false);
  const [isOpenPopup, setOpenPopup] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Toggle dark mode based on the theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    setDarkMode(theme === "dark");
  }, [theme]);

  // Fetch users from API
  useEffect(() => {
    const fetchAllUsers = async () => {
      setLoading(true);
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);
      } catch (error) {
       
        if (!error.message.includes('canceled')) {
          console.log("herr")
          toast.error('Failed to fetch users'); // Show error toast
        }
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllUsers();
  }, []); // No dependencies to avoid calling fetchAllUsers multiple times

  // Filter users based on the search term
  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle edit user
  const onEditUser = (user) => {
    setCurrentUser(user);
    setOpenPopup(true);
  };

  // Handle add new user
  const onAddUser = () => {
    setCurrentUser(null);
    setOpenPopup(true);
  };

  // Handle user deletion
  const onDeleteUser = async (userId) => {
    if (loading) return;
    setLoading(true);
    try {
      await deleteUser(userId);
      setUsers(users.filter(user => user.id !== userId));
      toast.success('User deleted successfully');
    } catch (err) {
      if (!err.message.includes('canceled')) {
        toast.error('Failed to delete user'); // Show error toast
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Close the popup
  const handleClosePopup = () => {
    setOpenPopup(false);
    setCurrentUser(null);
  };

  // Handle form submission
  const handleFormSubmit = async (userData) => {
    if (loading) return;
    setLoading(true);
    try {
      if (currentUser) {
        const updatedUser = await updateUser(userData, currentUser.id);
        setUsers(users.map(user => (user.id === currentUser.id ? updatedUser : user)));
        toast.success('User updated successfully');
      } else {
        const newUser = await createUser(userData);
        setUsers([...users, newUser]);
        toast.success('User created successfully');
      }
      setOpenPopup(false);
    } catch (err) {
      if (!err.message.includes('canceled')) {
        console.log("her2")
        toast.error(currentUser ? 'Failed to update user' : 'Failed to create user'); // Show error toast
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-white dark:bg-black overflow-hidden">
      <div className="flex justify-center gap-2 h-auto">
        <p className="text-3xl font-bold text-black dark:text-white p-2">CRUD Operations</p>
        <div className="flex justify-end p-2">
          <DarkModeSwitch
            style={{ marginBottom: '2rem' }}
            checked={isDarkMode}
            onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
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

        {loading ? (
          <Loader /> // Show the loader while loading
        ) : (
          <div className="space-y-4">
            {filteredUsers.map(user => (
              <UserCard
                key={user.id}
                user={user}
                onEdit={() => onEditUser(user)}
                onDelete={onDeleteUser}
              />
            ))}
          </div>
        )}
      </div>

      {/* Add User Button */}
      <div className="fixed bottom-4 right-4">
        <button
          className="bg-purple-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg"
          onClick={onAddUser}
        >
          Add Users
        </button>
      </div>

      {/* Popup Modal */}
      {isOpenPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg max-w-md w-full">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">
                {currentUser ? 'Edit User' : 'Add New User'}
              </h2>
              <button
                className="mt-0 text-gray-500 dark:text-gray-300 font-bold mb-4"
                onClick={handleClosePopup}
              >
                ✕
              </button>
            </div>
            <UserForm user={currentUser} onClose={handleClosePopup} onSubmit={handleFormSubmit} />
          </div>
        </div>
      )}

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default App;
