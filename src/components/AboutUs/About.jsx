import React from 'react';
import aboutimg from '../../assets/images/aboutcompany.jpg';``
export default function About() {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
        <h1 className="text-5xl font-bold text-orange-500 mb-6">ABOUT US</h1>
        
        <div className="w-32 h-px bg-gray-300 mb-8"></div>
        
        <p className="text-gray-700 text-lg">
          At Source and Recruitment we're dedicated to matching skilled professionals with top 
          administrative positions. With a track record of success spanning several years, we've become a 
          trusted partner for both employers and job seekers in the administrative field.
        </p>
      </div>
      <div className="w-full md:w-1/2 bg-gray-100">
        <img 
          src= {aboutimg}
          alt="People in a business meeting"
          className="w-full h-[500px] object-cover"
        />
      </div>
    </div>
  );
}