import React from 'react';
import chooseusimg from '../../assets/images/featured.jpg';
export default function WhyChooseUs() {
  return (
    <div className="w-full bg-orange-500 text-white">
      <div className="relative w-full">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className=" p-4 mt-8 rounded-lg shadow-lg mb-4">
            <img 
              src= {chooseusimg}
              alt="Team collaboration" 
              className="w-full h-auto rounded"
            />
          </div>
          
          <div className="text-center py-6">
            <h1 className="text-5xl font-bold text-white">Why Choose Us</h1>
            <div className="w-24 h-1 bg-white mx-auto mt-6 mb-8"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-2xl font-semibold mb-6">
              HR Services Tailored to Your Business
            </h2>
            
            <p className="text-lg leading-relaxed">
              With our personalized approach to recruitment and commitment to excellence, we're here to
              support you every step of the way in your job search or talent acquisition journey. We specialize
              in providing personalized HR solutions designed to meet the unique needs of your business. Our
              comprehensive services cover strategic HR consulting, recruitment and talent acquisition,
              employee relations and compliance, training and development, and HR technology solutions.
              With our expertise and tailored approach, we ensure that your organization has the support it
              needs to thrive. Let us be your trusted partner in success. Contact us today to learn more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}