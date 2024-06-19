// src/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-purple-600 bg-opacity-50 backdrop-blur-md fixed w-full top-0 z-10 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-white font-bold text-xl">coinbase</div>
        <div className="flex space-x-6">
          <a href="#" className="text-white hover:text-gray-300">Explore</a>
          <a href="#" className="text-white hover:text-gray-300">Learn</a>
          <a href="#" className="text-white hover:text-gray-300">Individuals</a>
          <a href="#" className="text-white hover:text-gray-300">Businesses</a>
          <a href="#" className="text-white hover:text-gray-300">Developers</a>
          <a href="#" className="text-white hover:text-gray-300">Company</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-gray-300">Sign in</button>
          <button className="bg-white text-purple-600 px-4 py-2 rounded-full hover:bg-gray-100">Sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
