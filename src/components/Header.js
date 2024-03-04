import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='mb-4'>
    <header className="bg-gray-800 text-white py-4 mb-4">
      <div className="container mx-auto flex justify-between items-center ">
        {/* Logo or Site Name */}
        <div className="text-2xl font-bold">ImgDetect</div>

        {/* Navigation Links */}
        <nav className="flex space-x-4">
          <Link to="/" className="hover:text-gray-300 transition duration-300 hover:font-semibold">Home</Link>
          <Link to="/about" className="hover:text-gray-300 transition duration-300 hover:font-semibold">About</Link>
          <Link to="/contact" className="hover:text-gray-300 transition duration-300 hover:font-semibold">Contact</Link>
        </nav>
      </div>
    </header>
    </div>
    
  );
};

export default Header;
