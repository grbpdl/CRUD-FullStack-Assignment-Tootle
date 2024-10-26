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

//Function to Delete a user
export const deleteUser = async (id) => {
  console.log(id)
  const response = await axios.delete(`${API_URL}/user/${id}`);
  return response.data;
};
//Function to Update a user
export const updateUser = async (user,id) => {
  const response = await axios.put(`${API_URL}/user/${id}`, user);
  return response.data;
};