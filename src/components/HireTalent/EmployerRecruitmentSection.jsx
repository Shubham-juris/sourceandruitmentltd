import React from 'react';
import candidate from '../../assets/images/candidate.jpg';
export default function EmployerRecruitmentSection() {
  return (
    <div className="w-full bg-white py-16 px-0 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 relative">
            <img 
              src={candidate}
              alt="Business professional checking phone"
              className="w-full h-[38rem] max-w-md mx-auto"
            />            
          </div>
          <div className="w-full md:w-1/2 md:pl-14 text-center md:text-left">
           
            <h2 className="text-5xl font-bold text-orange-500 mb-10">
              Find your ideal candidate for your team
            </h2>
            
            <ul className="list-disc pl-6 mb-10 text-left text-base">
              <li className="text-gray-700 mb-3 text-2xl">Tax Benefits</li>
              <li className="text-gray-700 mb-3 text-2xl">Increased Productivity</li>
              <li className="text-gray-700 mb-3 text-2xl">Talent Attraction</li>
              <li className="text-gray-700 mb-3 text-2xl">Improved Morale</li>
              <li className="text-gray-700 mb-3 text-2xl">Employee Retention</li>
            </ul>
            
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full transition duration-300 uppercase text-base">
              Search Candidates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
