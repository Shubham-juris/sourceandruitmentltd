import React from 'react';
import JobsOpportunities from '../../assets/images/JobsOpportunities.jpg';``
export default function Jobheader() {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
        <h1 className="text-5xl font-bold text-orange-500 mb-6">Jobs Opportunities</h1>
        
        <div className="w-32 h-px bg-gray-300 mb-8"></div>
        
        <p className="text-gray-700 text-lg px-10">
        Explore exciting job opportunities with Source and Recruitment. From administrative roles to executive positions, we connect talented individuals with top-tier organizations. Join us and unlock your potential.
        </p>
      </div>
      <div className="w-full md:w-1/2 bg-gray-100">
        <img 
          src= {JobsOpportunities}
          alt="People in a business meeting"
          className="w-full h-[500px] object-cover"
        />
      </div>
    </div>
  );
}