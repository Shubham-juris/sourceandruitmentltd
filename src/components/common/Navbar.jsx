import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/logo/logo.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const moreDropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);
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
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const isActive = (path) => currentPath === path ? "text-purple-600" : "text-black";

  const handleOptionClick = () => {
    setMoreDropdownOpen(false);
    setProfileDropdownOpen(false);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"} bg-white shadow`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-black flex items-center justify-center text-xl font-semibold">
            <img src={logo} className="w-50 h-10" alt="Logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className={`${isActive("/")} hover:text-orange-600`}>Home</Link>
            <Link to="/about" className={`${isActive("/about")} hover:text-orange-600`}>About Us</Link>
            <Link to="/job-seekers" className={`${isActive("/job-seekers")} hover:text-orange-600`}>Job Seekers</Link>
            <Link to="/hire-talent" className={`${isActive("/hire-talent")} hover:text-orange-600`}>Hire Talent</Link>
            <Link to="/explore-jobs" className={`${isActive("/explore-jobs")} hover:text-orange-600`}>Explore Jobs</Link>

            {/* MORE dropdown */}
            <div className="relative" ref={moreDropdownRef}>
              <button onClick={() => setMoreDropdownOpen(!moreDropdownOpen)} className="cursor-pointer text-black hover:text-orange-600">
                More
              </button>
              {moreDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-30">
                  <Link to="/contact" onClick={handleOptionClick} className="block px-4 py-2 text-black hover:bg-gray-200">Contact Us</Link>
                  <Link to="/hot-jobs" onClick={handleOptionClick} className="block px-4 py-2 text-black hover:bg-gray-200">Hot Jobs</Link>
                  <Link to="/hiring" onClick={handleOptionClick} className="block px-4 py-2 text-black hover:bg-gray-200">Hiring</Link>
                </div>
              )}
            </div>

            {/* Profile */}
            <div className="relative cursor-pointer" ref={profileDropdownRef}>
              <button onClick={() => setProfileDropdownOpen(!profileDropdownOpen)} className="text-black">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A4.992 4.992 0 0112 15c1.657 0 3.156.804 4.121 2.073M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-30">
                  <Link to="/signin" onClick={handleOptionClick} className="block px-4 py-2 text-black hover:bg-gray-200">Sign In</Link>
                  <Link to="/create-account" onClick={handleOptionClick} className="block px-4 py-2 text-black hover:bg-gray-200">Create Account</Link>
                  <Link to="/my-account" onClick={handleOptionClick} className="block px-4 py-2 text-black hover:bg-gray-200">My Account</Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black">
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <Link to="/" onClick={handleOptionClick} className="block py-2 text-black hover:text-orange-600">Home</Link>
          <Link to="/about" onClick={handleOptionClick} className="block py-2 text-black hover:text-orange-600">About Us</Link>
          <Link to="/job-seekers" onClick={handleOptionClick} className="block py-2 text-black hover:text-orange-600">Job Seekers</Link>
          <Link to="/hire-talent" onClick={handleOptionClick} className="block py-2 text-black hover:text-orange-600">Hire Talent</Link>
          <Link to="/explore-jobs" onClick={handleOptionClick} className="block py-2 text-black hover:text-orange-600">Explore Jobs</Link>

          <Link to="/contact" onClick={handleOptionClick} className="block py-2 text-black hover:text-orange-600">Contact Us</Link>
          <Link to="/hot-jobs" onClick={handleOptionClick} className="block py-2 text-black hover:text-orange-600">Hot Jobs</Link>
          <Link to="/hiring" onClick={handleOptionClick} className="block py-2 text-black hover:text-orange-600">Hiring</Link>

          <Link to="/signin" onClick={handleOptionClick} className="block py-2 text-black hover:text-orange-600">Sign In</Link>
          <Link to="/create-account" onClick={handleOptionClick} className="block py-2 text-black hover:text-orange-600">Create Account</Link>
          <Link to="/my-account" onClick={handleOptionClick} className="block py-2 text-black hover:text-orange-600">My Account</Link>
        </div>
      )}
    </nav>
  );
}
