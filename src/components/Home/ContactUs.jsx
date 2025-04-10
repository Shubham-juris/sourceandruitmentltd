import React, { useState } from 'react';
export default function ContactUs() {
  const [isHoursExpanded, setIsHoursExpanded] = useState(false);
  
  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-300 py-12 px-4 text-center">
      <h1 className="text-5xl font-bold text-orange-500 mb-6">Contact Us</h1>
      
      <div className="w-16 h-px bg-gray-300 mx-auto mb-8"></div>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Better yet, see us in person!</h2>
      
      <p className="text-gray-600 mb-10">
        We love our customers, so feel free to visit during normal business hours.
      </p>
      
      <div className="max-w-lg mx-auto mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Source and Recruitment</h3>
      </div>
      
      <div className="max-w-lg mx-auto mb-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Hours</h3>
        
        <button 
          className="flex items-center justify-center mx-auto text-gray-700 hover:text-gray-900"
          onClick={() => setIsHoursExpanded(!isHoursExpanded)}
        >
          <span>Open today 09:00 a.m. – 05:00 p.m.</span>
          <span className={`ml-2 transition-transform inline-block ${isHoursExpanded ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>
        
        {isHoursExpanded && (
          <div className="mt-2 p-4  text-center">
            <ul className="inline-block text-left">
              <li className="py-1">• Monday: 09:00 a.m. – 05:00 p.m.</li>
              <li className="py-1">• Tuesday: 09:00 a.m. – 05:00 p.m.</li>
              <li className="py-1">• Wednesday: 09:00 a.m. – 05:00 p.m.</li>
              <li className="py-1">• Thursday: 09:00 a.m. – 05:00 p.m.</li>
              <li className="py-1">• Friday: 09:00 a.m. – 05:00 p.m.</li>
              <li className="py-1">• Saturday: Closed</li>
              <li className="py-1">• Sunday: Closed</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}