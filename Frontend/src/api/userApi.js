import axios from 'axios';

const API_URL = 'https://crud-fullstack-assignment-tootle.onrender.com';

// Function to fetch all users
export const fetchUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

// Function to create a user
export const createUser = async (user) => {
  const response = await axios.post(`${API_URL}/user`, user);
  return response.data;
};