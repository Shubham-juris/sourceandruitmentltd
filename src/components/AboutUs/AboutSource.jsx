import React from 'react';
import Commencing from '../../assets/images/Commencing.jpg';
import Facilitating from '../../assets/images/Facilitating.jpg';
import Guiding from '../../assets/images/Guiding.jpg';

export default function AboutSource() {
  return (
    <div className="w-full bg-white py-20 px-8 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-5xl font-bold text-orange-500 mb-4">
            About Source and Recruitment
        </h2>
        <div className="w-24 h-0.5 bg-gray-300 mx-auto my-10"></div>
        
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center mb-16 py-8">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img 
            src={Commencing}
            alt="Person writing on notepad"
            className="rounded-lg shadow-lg w-full h-80 object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-12">
          <h3 className="text-2xl text-center font-bold text-gray-800 mb-4">
            1. Our Mission
          </h3>
          <p className="text-gray-700">
            At Source and Recruitment, our mission is to provide exceptional human resource services to businesses of all sizes. We strive to create a positive and productive work environment for both employers and employees.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center mb-16">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img 
            src={Facilitating}
            alt="Team reviewing documents"
            className="rounded-lg shadow-lg w-full h-80 object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 md:pr-12">
          <h3 className="text-2xl text-center font-bold text-gray-800 mb-4">
            2. Our Team
          </h3>
          <p className="text-gray-700">
            Our team is composed of experienced HR professionals who are passionate about helping businesses succeed. We pride ourselves on our expertise and ability to provide customized solutions to our clients.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center mb-16">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img 
            src={Guiding} 
            alt="People collaborating at whiteboard"
            className="rounded-lg shadow-lg w-full h-80 object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-12">
          <h3 className="text-2xl text-center font-bold text-gray-800 mb-4">
            3. Our Services
          </h3>
          <p className="text-gray-700">
          We offer a wide range of HR services, including recruitment, training and development, performance management, compensation and benefits, and HR consulting. Our services are designed to meet the unique needs of each client.
          </p>
        </div>
      </div>
    </div>
  );
}