import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false); // Desktop "MORE" dropdown toggle
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false); // Profile dropdown toggle
  const [mobileMoreDropdownOpen, setMobileMoreDropdownOpen] = useState(false); // Mobile dropdown toggle
  
  const moreDropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target)) {
        setMoreDropdownOpen(false);
      }
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target)) {
        setMobileMoreDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [moreDropdownRef, profileDropdownRef, mobileDropdownRef]);

  // Function to close dropdowns after clicking an option
  const handleOptionClick = () => {
    setMoreDropdownOpen(false);
    setProfileDropdownOpen(false);
    setMobileMoreDropdownOpen(false);
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-20 bg-black bg-opacity-80 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h1 className="text-white font-bold text-2xl">
              Sources and Recruitment
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link
              to="/"
              className="text-white hover:text-gray-200 text-md font-medium"
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-gray-200 text-md font-medium"
            >
              ABOUT US
            </Link>
            <Link
              to="/job-seekers"
              className="text-white hover:text-gray-200 text-md font-medium"
            >
              JOB SEEKERS
            </Link>
            <Link
              to="/hire-talent"
              className="text-white hover:text-gray-200 text-md font-medium"
            >
              HIRE TALENT
            </Link>
            <Link
              to="/explore-jobs"
              className="text-white hover:text-gray-200 text-md font-medium"
            >
              EXPLORE JOBS
            </Link>
            
            {/* More Dropdown */}
            <div className="relative" ref={moreDropdownRef}>
              <button 
                className="text-white hover:text-gray-200 text-md font-medium flex items-center"
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
              >
                MORE
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${moreDropdownOpen ? 'transform rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              
              {/* Desktop More Dropdown menu */}
              {moreDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black bg-opacity-90 rounded-md shadow-lg py-1 z-30">
                  <Link 
                    to="/resources" 
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-800"
                    onClick={handleOptionClick}
                  >
                    Resources
                  </Link>
                  <Link 
                    to="/blog" 
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-800"
                    onClick={handleOptionClick}
                  >
                    Blog
                  </Link>
                  <Link 
                    to="/contact" 
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-800"
                    onClick={handleOptionClick}
                  >
                    Contact Us
                  </Link>
                </div>
              )}
            </div>
            
            {/* Profile Dropdown */}
            <div className="relative" ref={profileDropdownRef}>
              <button 
                className="text-white p-1 rounded-full hover:bg-gray-800"
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
              
              {/* Profile Dropdown Menu */}
              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black bg-opacity-90 rounded-md shadow-lg py-1 z-30">
                  <Link 
                    to="/signin" 
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-800"
                    onClick={handleOptionClick}
                  >
                    Sign IN 
                  </Link>
                  <Link 
                    to="/account-settings" 
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-800"
                    onClick={handleOptionClick}
                  >
                    Account Settings
                  </Link>
                  <div className="border-t border-gray-700 my-1"></div>
                  <Link 
                    to="/logout" 
                    className="block px-4 py-2 text-sm text-red-400 hover:bg-gray-800"
                    onClick={handleOptionClick}
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {/* Mobile Profile Icon */}
            <button 
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className="text-white p-1 rounded-full mr-2"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
            
            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Profile Dropdown for Mobile */}
      {profileDropdownOpen && (
        <div className="md:hidden absolute right-16 top-16 w-48 bg-black bg-opacity-90 rounded-md shadow-lg py-1 z-40">
          <Link 
            to="/profile" 
            className="block px-4 py-2 text-sm text-white hover:bg-gray-800"
            onClick={handleOptionClick}
          >
            My Profile
          </Link>
          <Link 
            to="/account-settings" 
            className="block px-4 py-2 text-sm text-white hover:bg-gray-800"
            onClick={handleOptionClick}
          >
            Account Settings
          </Link>
          <div className="border-t border-gray-700 my-1"></div>
          <Link 
            to="/logout" 
            className="block px-4 py-2 text-sm text-red-400 hover:bg-gray-800"
            onClick={handleOptionClick}
          >
            Logout
          </Link>
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-80 px-4 pb-4">
          <Link to="/" className="block text-white py-2">
            HOME
          </Link>
          <Link to="/about" className="block text-white py-2">
            ABOUT US
          </Link>
          <Link to="/job-seekers" className="block text-white py-2">
            JOB SEEKERS
          </Link>
          <Link to="/hire-talent" className="block text-white py-2">
            HIRE TALENT
          </Link>
          <Link to="/explore-jobs" className="block text-white py-2">
            EXPLORE JOBS
          </Link>
          <div className="block py-2" ref={mobileDropdownRef}>
            <button 
              onClick={() => setMobileMoreDropdownOpen(!mobileMoreDropdownOpen)}
              className="flex items-center text-white w-full"
            >
              MORE
              <svg
                className={`ml-1 h-4 w-4 transition-transform duration-200 ${mobileMoreDropdownOpen ? 'transform rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {mobileMoreDropdownOpen && (
              <div className="pl-4 mt-1">
                <Link 
                  to="/resources" 
                  className="block text-white py-2"
                  onClick={handleOptionClick}
                >
                  Resources
                </Link>
                <Link 
                  to="/blog" 
                  className="block text-white py-2"
                  onClick={handleOptionClick}
                >
                  Blog
                </Link>
                <Link 
                  to="/contact" 
                  className="block text-white py-2"
                  onClick={handleOptionClick}
                >
                  Contact Us
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}