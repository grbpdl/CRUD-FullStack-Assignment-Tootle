import React, { useState, useEffect } from 'react';

const UserForm = ({ user, onSubmit }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: ''
  });

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username,
        email: user.email,
      });
    } else {
      setFormData({
        username: '',
        email: ''
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
        className="border rounded-lg p-2 w-full mb-4"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="border rounded-lg p-2 w-full mb-4"
        required
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
        {user ? 'Update User' : 'Add User'}
      </button>
    </form>
  );
};

export default UserForm;
