// src/components/Loader.js
import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-32">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-800 dark:border-gray-300"></div>
    </div>
  );
};

export default Loader;
