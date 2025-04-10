import React from 'react';
import Featured from '../../assets/images/featured.jpg'; // Adjust the path as necessary
export default function FeaturedJob() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold text-orange-500 mb-6">Featured Job Listings Section</h2>
          <div className="w-16 h-1 bg-gray-300 mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Job Listings */}
          <div className="lg:w-3/5">
            <h3 className="text-4xl font-semibold text-orange-500 mb-8">Administrative Job Opportunities:</h3>
            
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-orange-500 text-3xl mr-2">•</span>
                <div>
                  <span className="text-2xl font-semibold text-gray-800">Administrative Assistant:</span>
                  <span className="text-gray-600 text-xl/snug"> Support daily operations, manage calendars, and handle correspondence.</span>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="text-orange-500 text-3xl mr-2">•</span>
                <div>
                  <span className=" text-2xl font-semibold text-gray-800">Bookkeeper:</span>
                  <span className="text-gray-600 text-xl/snug"> Manage financial records, reconcile bank statements, and prepare reports.</span>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="text-orange-500 text-3xl mr-2">•</span>
                <div>
                  <span className=" text-2xl font-semibold text-gray-800">Office Clerk:</span>
                  <span className="text-gray-600 text-xl/snug"> Maintain office efficiency through administrative tasks like answering phones and data entry.</span>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="text-orange-500 text-3xl mr-2">•</span>
                <div>
                  <span className=" text-2xl font-semibold text-gray-800">Receptionist:</span>
                  <span className="text-gray-600 text-xl/snug"> Greet visitors, manage calls, and handle inquiries at the front desk.</span>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="text-orange-500 text-3xl mr-2">•</span>
                <div>
                  <span className=" text-2xl font-semibold text-gray-800">Data Entry Clerk:</span>
                  <span className="text-gray-600 text-xl/snug"> Input and update information accurately, ensuring data integrity.</span>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="text-orange-500 text-3xl mr-2">•</span>
                <div>
                  <span className=" text-2xl font-semibold text-gray-800">Executive Assistant:</span>
                  <span className="text-gray-600 text-xl/snug"> Provide high-level administrative support, manage schedules, and coordinate meetings and travel arrangements.</span>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="lg:w-2/5 mt-8 lg:mt-0">
            <img 
              src= { Featured}
              alt="Team of professionals in a meeting" 
              className="w-full h-[550px] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}