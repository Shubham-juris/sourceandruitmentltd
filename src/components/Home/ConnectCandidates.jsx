import React from 'react';
import office from '../../assets/images/manoffice.png';
export default function ConnectCandidates() {
  return (
    <div className="bg-white pt-12">
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
          <div className=" py-12 md:w-1/2 md:pl-12 text-center md:text-left"> 
            
            <h2 className="text-5xl font-semibold text-orange-500 mb-6">
                Connect with the best Candidates
            </h2>
            
            <p className="text-gray-700 mb-8 text-2xl">
                Discover the best administrative roles with Source and Recruitment, with our personalized service and years of experience, we connect talented individuals with top positions. Explore our latest job opportunities and take the next step towards success today.
            </p>
            
            
            
            <div className="flex justify-center md:justify-start">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-full transition duration-300">
                SEARCH CANDIDATES
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}