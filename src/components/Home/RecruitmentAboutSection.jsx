import React from 'react';
import office from '../../assets/images/office.png';
export default function RecruitmentAboutSection() {
  return (
    <div className="bg-white py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative">
              <img 
                src= {office}
                alt="Recruitment professional with notebook" 
                className="max-w-full h-auto"
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12 text-center md:text-left"> 
            
            <h2 className="text-4xl font-semibold text-orange-500 mb-6">
              Unlocking the potential of talent to fuel business success.
            </h2>
            
            <p className="text-gray-700 mb-8 text-lg">
              Welcome to Source and Recruitment where we specialize in connecting talented individuals with 
              rewarding administrative roles. Explore our latest job opportunities and take the next step towards a 
              fulfilling career.
            </p>
            
            <p className="text-gray-600 mb-10">
              Find Your Next Opportunity linking to the Job Listings page.
            </p>
            
            <div className="flex justify-center md:justify-start">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-full transition duration-300">
                SEARCH JOBS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}