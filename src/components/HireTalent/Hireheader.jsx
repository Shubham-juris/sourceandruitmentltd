
import React from 'react';
import Hireheaderimg from '../../assets/images/JobsOpportunities.jpg';``
export default function Hireheader() {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
        <h1 className="text-5xl font-bold text-orange-500 mb-6">Hire Talent</h1>
        
        <div className="w-32 h-px bg-gray-300 mb-8"></div>
        
        <p className="text-gray-700 text-lg px-10">
            Discover your next career move with Source and Recruitment. Whether you're an experienced professional or just starting your journey, we're here to help you find the perfect opportunity. Let us be your guide to success.
        </p>
      </div>
      <div className="w-full md:w-1/2 bg-gray-100">
        <img 
          src= {Hireheaderimg}
          alt="People in a business meeting"
          className="w-full h-[500px] object-cover"
        />
      </div>
    </div>
  );
}