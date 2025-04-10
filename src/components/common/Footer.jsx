import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8 px-4">
      <div className="container mx-auto text-center">
        <p className="text-gray-400 mb-6">
          Copyright © 2024 Source and Recruitment - All Rights Reserved.
        </p>
        
        <nav className="flex justify-center space-x-6">
          <a href="/" className="hover:text-gray-300 transition-colors">
            HOME
          </a>
          <a href="/about" className="hover:text-gray-300 transition-colors">
            ABOUT US
          </a>
          <a href="/jobs" className="hover:text-gray-300 transition-colors">
            JOB SEEKERS
          </a>
          <a href="/hire" className="hover:text-gray-300 transition-colors">
            HIRE TALENT
          </a>
        </nav>
      </div>
    </footer>
  );
}