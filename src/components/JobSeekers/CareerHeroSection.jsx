import React from 'react';
import Professional from '../../assets/images/Professional.png'; 
export default function CareerHeroSection() {
  return (
    <div className="w-full bg-white pt-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 h-[700px] md:mb-0">
            <img 
              src={Professional} 
              alt="Professional woman holding notebook"
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
          
          <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left ">
            
            <h1 className="text-5xl font-bold text-orange-500 mb-6 py-10">
              Your career journey starts here.
            </h1>
            <p className="text-gray-700 mb-8 text-3xl">
              Embark on your career journey with us. Explore endless possibilities 
              and unlock new opportunities tailored to your aspirations and skills. 
              Whether you're a seasoned professional or just starting out, take the 
              first step towards success today.
            </p>
            <h1 className=" text-2xl font-medium text-gray-700 mb-8 py-4">
              Your future begins now!
            </h1>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 uppercase">
              Find Your Next Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}