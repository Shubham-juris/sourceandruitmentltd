import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [mobileMoreDropdownOpen, setMobileMoreDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const moreDropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const location = useLocation();
  const currentPath = location.pathname;

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
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShowNavbar(true); // scroll up
      } else if (currentScrollY > 100) {
        setShowNavbar(false); // scroll down
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleOptionClick = () => {
    setMoreDropdownOpen(false);
    setProfileDropdownOpen(false);
    setMobileMoreDropdownOpen(false);
  };

  const isActive = (path) =>
    currentPath === path ? "text-orange-400" : "text-white";

  return (
    <nav
      className={`top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? "fixed" : "-translate-y-full"
      } bg-black bg-opacity-80 shadow-lg`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h1 className="text-white font-bold text-3xl">
              Sources and Recruitment
            </h1>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className={`${isActive("/")} hover:text-orange-400 text-lg font-medium`}>
              HOME
            </Link>
            <Link to="/about" className={`${isActive("/about")} hover:text-orange-400 text-lg font-medium`}>
              ABOUT US
            </Link>
            <Link to="/job-seekers" className={`${isActive("/job-seekers")} hover:text-orange-400 text-lg font-medium`}>
              JOB SEEKERS
            </Link>
            <Link to="/hire-talent" className={`${isActive("/hire-talent")} hover:text-orange-400 text-lg font-medium`}>
              HIRE TALENT
            </Link>
            <Link to="/explore-jobs" className={`${isActive("/explore-jobs")} hover:text-orange-400 text-lg font-medium`}>
              EXPLORE JOBS
            </Link>

            <div className="relative" ref={moreDropdownRef}>
              <button
                className="text-white hover:text-orange-400 text-lg font-medium flex items-center"
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
              >
                MORE
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    moreDropdownOpen ? "rotate-180" : ""
                  }`}
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
              {moreDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black bg-opacity-90 rounded-md shadow-lg py-1 z-30">
                  <Link
                    to="/contact"
                    className="block px-4 py-2 text-sm text-white hover:text-orange-400 hover:bg-gray-800"
                    onClick={handleOptionClick}
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/hot-jobs"
                    className="block px-4 py-2 text-sm text-white hover:text-orange-400 hover:bg-gray-800"
                    onClick={handleOptionClick}
                  >
                    Hot Jobs
                  </Link>
                  <Link
                    to="/hiring"
                    className="block px-4 py-2 text-sm text-white hover:text-orange-400 hover:bg-gray-800"
                    onClick={handleOptionClick}
                  >
                    Hiring
                  </Link>
                </div>
              )}
            </div>

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
              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black bg-opacity-90 rounded-md shadow-lg py-1 z-30">
                  <Link
                    to="/signin"
                    className="block px-4 py-2 text-sm text-white hover:text-orange-400 hover:bg-gray-800"
                    onClick={handleOptionClick}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/create-account"
                    className="block px-4 py-2 text-sm text-white hover:text-orange-400 hover:bg-gray-800"
                    onClick={handleOptionClick}
                  >
                    Create Account
                  </Link>
                  <Link
                    to="/my-account"
                    className="block px-4 py-2 text-sm text-white hover:text-orange-400 hover:bg-gray-800"
                    onClick={handleOptionClick}
                  >
                    My Account
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
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

      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-80 px-4 pb-4">
          <Link to="/" className="block text-white py-2 hover:text-orange-400">
            HOME
          </Link>
          <Link to="/about" className="block text-white py-2 hover:text-orange-400">
            ABOUT US
          </Link>
          <Link to="/job-seekers" className="block text-white py-2 hover:text-orange-400">
            JOB SEEKERS
          </Link>
          <Link to="/hire-talent" className="block text-white py-2 hover:text-orange-400">
            HIRE TALENT
          </Link>
          <Link to="/explore-jobs" className="block text-white py-2 hover:text-orange-400">
            EXPLORE JOBS
          </Link>
          <div className="block py-2" ref={mobileDropdownRef}>
            <button
              onClick={() => setMobileMoreDropdownOpen(!mobileMoreDropdownOpen)}
              className="flex items-center text-white w-full hover:text-orange-400"
            >
              MORE
              <svg
                className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                  mobileMoreDropdownOpen ? "rotate-180" : ""
                }`}
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
              <div className="mt-2 bg-black bg-opacity-90 rounded-md shadow-lg py-1">
                <Link to="/contact" className="block px-4 py-2 text-sm text-white hover:text-orange-400" onClick={handleOptionClick}>
                  Contact Us
                </Link>
                <Link to="/hot-jobs" className="block px-4 py-2 text-sm text-white hover:text-orange-400" onClick={handleOptionClick}>
                  Hot Jobs
                </Link>
                <Link to="/hiring" className="block px-4 py-2 text-sm text-white hover:text-orange-400" onClick={handleOptionClick}>
                  Hiring
                </Link>
              </div>
            )}
          </div>
          <Link to="/signin" className="block text-white py-2 hover:text-orange-400">
            Sign In
          </Link>
          <Link to="/create-account" className="block text-white py-2 hover:text-orange-400">
            Create Account
          </Link>
          <Link to="/my-account" className="block text-white py-2 hover:text-orange-400">
            My Account
          </Link>
        </div>
      )}
    </nav>
  );
}
