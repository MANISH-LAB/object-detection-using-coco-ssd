import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Header from './Header';
// import 'tailwindcss/tailwind.css';

const About = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
          <h1 className="text-3xl font-bold mb-4">Welcome to ImageDetect!</h1>
          <p className="text-gray-600 mb-6">
            We are passionate about image detection and have built a powerful tool using the COCO-SSD model.
            Explore the exciting world of image detection with our fast and accurate tool.
          </p>
          <p className="text-gray-600 mb-6">
            Our goal is to make image detection accessible and user-friendly. Whether you're a developer, student, or
            enthusiast, our tool provides a seamless experience for identifying objects in images.
          </p>
          <p className="text-gray-600 mb-6">
            Dive into the possibilities of image recognition and discover the magic of COCO-SSD. Join us on this journey
            as we continue to innovate and enhance the capabilities of our platform.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Connect with us on LinkedIn
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="https://github.com/MANISH-LAB"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900"
            >
              Explore our GitHub repository
            </a>
          </div>
        </div>
        <footer className="mt-8 text-gray-600">
          <div className="flex items-center space-x-4">
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
              <FaGithub className="text-xl" />
            </a>
            <a href="mailto:info@imagedetect.com" className="text-green-500 hover:text-green-700">
              <FaEnvelope className="text-xl" />
            </a>
          </div>
          <p className="text-sm mt-2">© 2024 ImageDetect. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default About;
