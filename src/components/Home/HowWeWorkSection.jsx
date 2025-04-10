import React from 'react';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';

export default function HowWeWorkSection() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-orange-500 mb-6">How we work</h2>
          <div className="w-16 h-1 bg-gray-300 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <div className="rounded-full overflow-hidden w-64 h-64 mb-8">
              <img 
                src= {img1} 
                alt="Strategic consultation meeting" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Strategic Consultation</h3>
            <p className="text-gray-600 text-center">
                 We start by understanding your business objectives, culture, and specific staffing requirements. Through strategic consultations, we align our recruitment strategies with your organizational goals.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="rounded-full overflow-hidden w-64 h-64 mb-8">
              <img 
                src= {img2}
                alt="Innovative recruitment methods" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Innovative Recruitment Methods</h3>
            <p className="text-gray-600 text-center">
                Leveraging cutting-edge technology and industry insights, we employ innovative recruitment methods to identify top talent. From AI-driven candidate sourcing to predictive analytics, we ensure we're always one step ahead in finding the perfect fit for your team.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="rounded-full overflow-hidden w-64 h-64 mb-8">
              <img 
                src= {img3}
                alt="Team high-fiving, representing transparent communication" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Transparent Communication:</h3>
            <p className="text-gray-600 text-center">
            We believe in transparency every step of the way. You’ll receive regular updates and clear communication throughout the recruitment process, ensuring you're always informed and in control.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}