import React from 'react';

const UserCard = ({ user, onEdit, onDelete }) => {
  return (
    <div className="p-6 border rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-700 dark:text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{user.username}</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(user)}
            className="p-2 text-blue-500 hover:text-blue-700"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(user.id)}
            className="p-2 text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </div>
      </div>
      <p className="text-gray-400">{user.email}</p>
    </div>
  );
};

export default UserCard;
