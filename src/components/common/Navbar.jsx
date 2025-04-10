import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-20 bg-black bg-opacity-80 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h1 className="text-white font-bold text-2xl">Sources and Recruitment</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link to="/" className="text-white hover:text-gray-200 text-md font-medium">HOME</Link>
            <Link to="/about" className="text-white hover:text-gray-200 text-md font-medium">ABOUT US</Link>
            <Link to="/job-seekers" className="text-white hover:text-gray-200 text-md font-medium">JOB SEEKERS</Link>
            <Link to="/hire-talent" className="text-white hover:text-gray-200 text-md font-medium">HIRE TALENT</Link>
            <Link to="/explore-jobs" className="text-white hover:text-gray-200 text-md font-medium">EXPLORE JOBS</Link>
            <button className="text-white hover:text-gray-200 text-md font-medium flex items-center">
              MORE
              <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="text-white p-1 rounded-full">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-80 px-4 pb-4">
          <Link to="/" className="block text-white py-2">HOME</Link>
          <Link to="/about" className="block text-white py-2">ABOUT US</Link>
          <Link to="/job-seekers" className="block text-white py-2">JOB SEEKERS</Link>
          <Link to="/hire-talent" className="block text-white py-2">HIRE TALENT</Link>
          <Link to="/explore-jobs" className="block text-white py-2">EXPLORE JOBS</Link>
          <Link to="/more" className="block text-white py-2">MORE</Link>
        </div>
      )}
    </nav>
  );
}
