// Footer.js
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-8 bg-gray-800 text-white p-4">
      <div className="flex items-center justify-center space-x-4">
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
          <FaLinkedin className="text-xl" />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
          <FaGithub className="text-xl" />
        </a>
        <a href="mailto:info@imagedetect.com" className="text-green-400 hover:text-green-500">
          <FaEnvelope className="text-xl" />
        </a>
      </div>
      <p className="text-sm mt-2 text-center">© 2024 ImageDetect. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
